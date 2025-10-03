"use client"

import type React from "react"
import { createContext, useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

type User = {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    avatar_url?: string
  }
}

type Session = {
  user: User
  access_token: string
}

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error?: string }>
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error?: string }>
  signOut: () => Promise<void>
  updateUser: (updates: Partial<User>) => Promise<{ error?: string }>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Check for existing session in localStorage
    const savedSession = localStorage.getItem('auth_session')
    if (savedSession) {
      try {
        const parsedSession = JSON.parse(savedSession)
        setSession(parsedSession)
        setUser(parsedSession.user)
      } catch (error) {
        localStorage.removeItem('auth_session')
      }
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loading && !user && pathname?.startsWith("/my-account")) {
      router.push("/login")
    }
  }, [user, loading, pathname, router])

  const signIn = async (email: string, password: string) => {
    // Simple mock authentication - in real app, this would call your API
    if (email && password) {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: {
          full_name: email.split('@')[0],
        }
      }
      const mockSession: Session = {
        user: mockUser,
        access_token: 'mock_token_' + Date.now()
      }
      
      setUser(mockUser)
      setSession(mockSession)
      localStorage.setItem('auth_session', JSON.stringify(mockSession))
      return {}
    }
    return { error: 'Invalid credentials' }
  }

  const signUp = async (email: string, password: string, metadata?: any) => {
    // Simple mock registration
    if (email && password) {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: metadata
      }
      const mockSession: Session = {
        user: mockUser,
        access_token: 'mock_token_' + Date.now()
      }
      
      setUser(mockUser)
      setSession(mockSession)
      localStorage.setItem('auth_session', JSON.stringify(mockSession))
      return {}
    }
    return { error: 'Invalid registration data' }
  }

  const signOut = async () => {
    setUser(null)
    setSession(null)
    localStorage.removeItem('auth_session')
    router.push('/')
  }

  const updateUser = async (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      const updatedSession = session ? { ...session, user: updatedUser } : null
      
      setUser(updatedUser)
      setSession(updatedSession)
      
      if (updatedSession) {
        localStorage.setItem('auth_session', JSON.stringify(updatedSession))
      }
      return {}
    }
    return { error: 'No user to update' }
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
