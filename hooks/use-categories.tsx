'use client'
import { api } from '@/lib/axios'
import { Category } from '@/types/category'
import { useQuery } from '@tanstack/react-query'

async function getCategories(): Promise<Category[]> {
  try {
    const response = await api.get('/categories')
    const data = await response.data
    return data
  } catch (error) {
    throw error
  }
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
}
