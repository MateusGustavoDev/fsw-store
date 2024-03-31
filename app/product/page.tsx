'use client'
import { useSearchParams } from 'next/navigation'
import ProductImages from './components/products-images'
import ProductInfo from './components/product-info'
import { computeProductTotalPrice } from '@/utils/compute-total-price'
import { ProductList } from '@/components/ui/product-list'
import { Suspense } from 'react'

import { getProductsByCategory } from '@/utils/get-products-by-category'

export default function ProductPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const id = searchParams.get('id')

  function getProduct(category: string | null, id: string | null) {
    const data = getProductsByCategory(category)
    if (data) {
      const filteredProduct = data.filter((product) => product.id === id)
      return filteredProduct
    }
  }

  const product = getProduct(category, id)
  const recommendedProducts = getProductsByCategory(category)

  return (
    <Suspense>
      <div className="w-full lg:mt-10">
        {product && recommendedProducts && (
          <div className="flex flex-col gap-6">
            <div className="max-w-[1250px] w-full lg:flex lg:px-5 gap-8 m-auto">
              <ProductImages name={product[0].name} imagesUrls={product[0].imageUrls} />{' '}
              <ProductInfo product={computeProductTotalPrice(product[0])} />
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
