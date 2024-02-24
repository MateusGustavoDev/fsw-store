'use client'
import { api } from '@/lib/axios'
import { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'

type ProductById = {
  category: string | null
  id: string | null
}

async function getProductById({ category, id }: ProductById): Promise<Product> {
  try {
    const response = await api.get(`/${category}/${id}`)
    const data = await response.data
    return data
  } catch (error) {
    throw error
  }
}

export function useProductById({ category, id }: ProductById) {
  return useQuery({
    queryKey: [`${category}-${id}`],
    queryFn: () => getProductById({ category, id }),
  })
}
