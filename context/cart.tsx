'use client'
import CartToast from '@/components/ui/cart-toast'
import { ProductWithTotalPrice } from '@/types/product'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number
}

interface ICartContext {
  products: CartProduct[]
  cartTotalPrice: number
  cartBasePrice: number
  cartTotalDiscount: number
  total: number
  subtotal: number
  totalDiscount: number
  addProductToCart: (product: CartProduct) => void
  decreaseProductQuantity: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  removeProductFromCart: (productId: string, categoryId: string) => void
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subtotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
})

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('@fsw-store/cart-products') || '[]'))
  }, [])

  // Total sem descontos
  const subtotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity
    }, 0)
  }, [products])

  // Total com descontos
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity
    }, 0)
  }, [products])

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id && cartProduct.categoryId === product.categoryId,
    )

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          }

          return cartProduct
        }),
      )

      return
    }

    // se não, adicione o produto à lista
    setProducts((prev) => [...prev, product])
    CartToast({ type: 'success', message: 'Produto adicionado ao carrinho!' })
  }

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          }

          return cartProduct
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    )
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          }
        }

        return cartProduct
      }),
    )
  }

  const removeProductFromCart = (productId: string, categoryId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => !(cartProduct.id === productId && cartProduct.categoryId === categoryId)),
    )
  }

  ;[
    {
      id: 1,
      productId: 'mouses',
    },
    {
      id: 1,
      productId: 'category',
    },
    {
      id: 1,
      productId: 'keyboards',
    },
  ]

  const totalDiscount = subtotal - total

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        total,
        subtotal,
        totalDiscount,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
