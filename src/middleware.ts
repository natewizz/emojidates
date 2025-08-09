import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { redis } from '@/lib/redis'

const RATE_LIMIT = 10;
const WINDOW_SEC = 60;

export async function middleware(request: NextRequest) {
  // Only rate limit the generate-date API route
  if (request.nextUrl.pathname.startsWith('/api/generate-date')) {
    // Get IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    
    // Get user ID from Supabase session (if available)
    let userId = null;
    try {
      // Only check for user if we have the required environment variables
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const supabase = createServerClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          {
            cookies: {
              get(name: string) {
                return request.cookies.get(name)?.value;
              },
              set(name, value, options) {
                request.cookies.set({ name, value, ...options });
              },
              remove(name, options) {
                request.cookies.set({ name, value: '', ...options });
              },
            },
          }
        );
        
        const { data, error } = await supabase.auth.getUser();
        if (!error && data?.user?.id) {
          userId = data.user.id;
        }
      }
    } catch (error) {
      console.warn('Middleware: Failed to get user from Supabase:', error);
      // Continue without user ID - IP-based rate limiting will still work
    }

    // Prepare keys
    const ipKey = `rl:ip:${ip}`;
    const userKey = userId ? `rl:user:${userId}` : null;

    try {
      // Check IP limit
      const ipCount = await redis.incr(ipKey);
      if (ipCount === 1) await redis.expire(ipKey, WINDOW_SEC);
      if (ipCount > RATE_LIMIT) {
        return new NextResponse("Slow down, Romeo! Too many date ideas requested from this IP. Please wait a minute and try again.", { status: 429 });
      }

      // Check user limit (if logged in)
      if (userKey) {
        const userCount = await redis.incr(userKey);
        if (userCount === 1) await redis.expire(userKey, WINDOW_SEC);
        if (userCount > RATE_LIMIT) {
          return new NextResponse("You've got a lot of love to give! But you've hit the date idea limit for now. Please wait a minute and try again.", { status: 429 });
        }
      }
    } catch (error) {
      console.warn('Middleware: Redis rate limiting failed:', error);
      // Continue without rate limiting - better to serve requests than fail
    }
  }

  // Skip Supabase session refresh for static files and certain paths
  if (
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.includes('.') ||
    request.nextUrl.pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Only initialize Supabase if we have the required environment variables
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Middleware: Missing Supabase environment variables');
    return response;
  }

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name, value, options) {
            request.cookies.set({ name, value, ...options })
            response = NextResponse.next({
              request: { headers: request.headers },
            })
            response.cookies.set({ name, value, ...options })
          },
          remove(name, options) {
            request.cookies.set({ name, value: '', ...options })
            response = NextResponse.next({
              request: { headers: request.headers },
            })
            response.cookies.set({ name, value: '', ...options })
          },
        },
      }
    )

    // Refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
    await supabase.auth.getUser()
  } catch (error) {
    console.warn('Middleware: Failed to refresh Supabase session:', error);
    // Continue without session refresh - better to serve the page than fail
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 