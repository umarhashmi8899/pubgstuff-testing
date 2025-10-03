// src/components/related-products.tsx
"use client"
import React from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Plus } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"
import { useCurrency } from "@/hooks/use-currency"
import type { Product } from "@/lib/products"
import { pcProducts, iosProducts, androidProducts } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

interface RelatedProductsProps {
  category: "pc" | "ios" | "android"
  currentProduct: string
  onPriceChange?: (price: number) => void
  onSelectedProductsChange?: (selectedProducts: Product[]) => void
}

export function RelatedProducts({ category, currentProduct, onPriceChange, onSelectedProductsChange }: RelatedProductsProps) {
  const { formatPrice } = useCurrency()
  const { toast } = useToast()
  const { addToCart, removeFromCart, cartItems } = useCart()
  const [selectedProducts, setSelectedProducts] = React.useState<Product[]>([])

  // Check if a product is in the cart
  const isInCart = (productId: number) => {
    return cartItems.some(item => item.id === productId)
  }

  // Check if a product is selected locally
  const isSelected = (productId: number) => {
    return selectedProducts.some(item => item.id === productId)
  }

  const handleToggleCart = React.useCallback((product: Product, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    
    const productInCart = isInCart(product.id)
    const productSelected = isSelected(product.id)
    
    if (productInCart || productSelected) {
      // Remove from cart and selection
      removeFromCart(product.id)
      setSelectedProducts(prev => prev.filter(item => item.id !== product.id))
      onPriceChange?.(-product.price)
      onSelectedProductsChange?.(selectedProducts.filter(item => item.id !== product.id))
      
      toast({
        title: "Product Removed",
        description: `${product.name} has been removed from your cart.`,
        variant: "destructive",
      })
    } else {
      // Add to cart and selection
      addToCart({
        id: product.id,
        name: product.name,
        href: product.href,
        category: product.category,
        price: product.price,
        imageUrl: product.imageUrl,
        aiHint: product.aiHint
      })
      
      const newSelectedProducts = [...selectedProducts, product]
      setSelectedProducts(newSelectedProducts)
      onPriceChange?.(product.price)
      onSelectedProductsChange?.(newSelectedProducts)
      
      toast({
        title: "Product Added",
        description: `${product.name} has been added to your cart.`,
      })
    }
  }, [selectedProducts, cartItems, addToCart, removeFromCart, onPriceChange, onSelectedProductsChange, toast])

  // Get products based on category
  let products: Product[] = []
  switch (category) {
    case "pc":
      products = pcProducts
      break
    case "ios":
      products = iosProducts
      break
    case "android":
      products = androidProducts
      break
  }

  const relatedProducts = products.filter((p) => p.name !== currentProduct)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <div className="mt-16 md:mt-24">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 font-headline mb-8">You Might Also Like</h2>
      <Carousel
        opts={{
          align: "start",
          loop: relatedProducts.length > 3,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {relatedProducts.map((product, index) => {
            const productInCart = isInCart(product.id)
            const productSelected = isSelected(product.id)
            const isAdded = productInCart || productSelected
            
            return (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="group overflow-hidden rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative">
                    <Link href={product.href}>
                      <div className="aspect-square relative">
                        <Image
                          src={product.imageUrl || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={product.aiHint}
                        />
                      </div>
                    </Link>
                    <div className="p-4 relative">
                      <h3 className="font-semibold font-headline text-gray-800 group-hover:text-primary transition-colors text-sm">
                        {product.name}
                      </h3>
                      <p className="mt-1 font-bold text-base text-gray-900">{formatPrice(product.price)}</p>
                      <Button
                        size="icon"
                        variant={isAdded ? "default" : "outline"}
                        className={cn(
                          "absolute bottom-2 right-2 h-8 w-8 rounded-full transition-all duration-300 z-10",
                          isAdded 
                            ? "bg-green-600 hover:bg-green-700 text-white opacity-100" 
                            : "opacity-0 group-hover:opacity-100 hover:bg-primary hover:text-white",
                        )}
                        onClick={(e) => handleToggleCart(product, e)}
                      >
                        {isAdded ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </Button>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
