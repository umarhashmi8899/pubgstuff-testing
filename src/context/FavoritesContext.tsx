"use client"

import { createContext, useState, type ReactNode, useCallback, useEffect } from "react"
import type { Product } from "@/lib/products"
import { allProducts } from "@/lib/products"
import { useAuth } from "@/hooks/use-auth"

interface FavoritesContextType {
  favoriteItems: Product[]
  addToFavorites: (item: Product) => Promise<void>
  removeFromFavorites: (id: number) => Promise<void>
  isFavorited: (id: number) => boolean
  loading: boolean
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  // Load favorites for the signed-in user
  useEffect(() => {
    const loadFavorites = async () => {
      if (!user) {
        setFavoriteItems([])
        return
      }
      setLoading(true)
      // Database functionality removed - favorites are now stored locally
      // In a real implementation, you would load from your preferred database
      setFavoriteItems([])
      setLoading(false)
    }
    loadFavorites()
  }, [user])

  const addToFavorites = useCallback(
    async (itemToAdd: Product) => {
      if (!user) return
      // Local state management - database functionality removed
      setFavoriteItems((prev) => (prev.find((i) => i.id === itemToAdd.id) ? prev : [...prev, itemToAdd]))
      // In a real implementation, you would save to your preferred database
    },
    [user],
  )

  const removeFromFavorites = useCallback(
    async (id: number) => {
      if (!user) return
      // Local state management - database functionality removed
      setFavoriteItems((prev) => prev.filter((item) => item.id !== id))
      // In a real implementation, you would remove from your preferred database
    },
    [user, favoriteItems],
  )

  const isFavorited = useCallback(
    (id: number) => {
      return favoriteItems.some((item) => item.id === id)
    },
    [favoriteItems],
  )

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites, isFavorited, loading }}>
      {children}
    </FavoritesContext.Provider>
  )
}
