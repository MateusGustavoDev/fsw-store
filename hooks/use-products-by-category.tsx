"use client";
import { api } from "@/lib/axios";
import { Categories } from "@/types/categories";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

async function getProductsByCategory(category: Categories): Promise<Product[]> {
  try {
    const response = await api.get(`/${category}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export function useProductsByCategory(category: Categories) {
  return useQuery({
    queryKey: [`${category}`],
    queryFn: () => getProductsByCategory(category),
  });
}
