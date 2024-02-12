"use client";
import { api } from "@/lib/axios";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

async function getProductBySlug(slug: string): Promise<Product> {
  try {
    const response = await api.get(`/${slug}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
}

export function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: [`${slug}`],
    queryFn: () => getProductBySlug(slug),
  });
}
