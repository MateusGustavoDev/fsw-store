'use client'
import { useProductById } from '@/hooks/use-product-by-id'
import { useSearchParams } from 'next/navigation'
import ProductImages from './components/products-images'
import ProductInfo from './components/product-info'
import { computeProductTotalPrice } from '@/utils/compute-total-price'
import { getProductsByCategory } from '@/hooks/use-products-by-category'
import { ProductList } from '@/components/ui/product-list'
import { Product } from '@/types/product'
import { Categories } from '@/types/categories'
import { Suspense, useEffect, useState } from 'react'

export default function ProductPage() {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[] | undefined>()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const id = searchParams.get('id')

  const { data } = useProductById({ category, id })

  useEffect(() => {
    async function getRecommendedProducts() {
      const data = await getProductsByCategory(category as Categories)
      setRecommendedProducts(data)
    }

    if (category) {
      getRecommendedProducts()
    }
  }, [category])

  return (
    <Suspense>
      <div className="w-full lg:mt-10">
        {/* Use o Suspense do React para envolver o código */}
        {data && recommendedProducts && (
          <div className="flex flex-col gap-6">
            <div className="max-w-[1250px] w-full lg:flex lg:px-5 gap-8 m-auto">
              <ProductImages name={data.name} imagesUrls={data.imageUrls} />{' '}
              <ProductInfo product={computeProductTotalPrice(data)} />
            </div>
            <div className="mt-8">
              <ProductList category="Produtos recomendados" products={recommendedProducts} />
            </div>
          </div>
        )}
      </div>
    </Suspense>
  )
}
