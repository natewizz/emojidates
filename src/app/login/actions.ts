'use server'

import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Login error:', error.message)
    return redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const origin = (await headers()).get('origin')
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // email_redirect_to is required for autoconfirming new users
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.error('Signup error:', error.message)
    return redirect('/login?message=Could not create user')
  }
  
  // For now, we are not requiring email verification, so we redirect directly.
  // In production, you would typically show a "please check your email" message.
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signInWithGoogle() {
  const origin = (await headers()).get('origin')
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.error('Google Sign-In error:', error.message)
    return redirect('/login?message=Could not authenticate with Google')
  }

  if (data.url) {
    redirect(data.url)
  }

  return redirect('/login?message=Could not get Google auth URL')
} 