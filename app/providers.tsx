'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartProvider from '@/context/cart'

interface ProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient()

export function Providers({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ReactQueryDevtools initialIsOpen={true} />
        <SessionProvider>{children}</SessionProvider>
      </CartProvider>
    </QueryClientProvider>
  )
}
