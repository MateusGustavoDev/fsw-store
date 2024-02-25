export type Product = {
  id: string
  name: string
  slug: string
  description: string
  imageUrls: string[]
  basePrice: number
  categoryId: string
  discountPercentage: number
  rating: number
  numberOfReviews: number
}

export interface ProductWithTotalPrice extends Product {
  totalPrice: number
}
