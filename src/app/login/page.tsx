// Login and Signup actions
'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border-2 border-white/50 dark:border-white/10 backdrop-blur-sm bg-white/80 dark:bg-black/60">
        <CardHeader className="text-center space-y-2 pt-8">
          <CardTitle className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
            Sign in to EmojiDates <span role="img" aria-label="heart-eyes-cat">😻</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-3 py-6 text-lg font-medium border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 rounded-xl"
            type="button"
          >
            <span className="inline-flex items-center justify-center w-6 h-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </span>
            <span className="text-gray-700 dark:text-gray-200">Continue with Google</span>
          </Button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600" />
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="py-6 text-lg rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-pink-400 dark:focus:border-pink-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password"  className="text-base font-medium text-gray-700 dark:text-gray-300">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="py-6 text-lg rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-pink-400 dark:focus:border-pink-500 transition-colors"
              />
            </div>
            <div className="flex gap-4 pt-2">
              <Button className="w-full py-6 text-lg font-bold rounded-xl bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 transform hover:scale-105">Sign in</Button>
            </div>
             <div className="text-center">
                <Button variant="link" className="text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500">
                  Don't have an account? Create one
                </Button>
              </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 