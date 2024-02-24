import { Product } from '@/types/product'

export interface productWithTotalPrice extends Product {
  totalPrice: number
}

export const computeProductTotalPrice = (
  product: Product,
): productWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    }
  }
  const totalDiscount =
    Number(product.basePrice) * Number(product.discountPercentage / 100)

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  }
}
