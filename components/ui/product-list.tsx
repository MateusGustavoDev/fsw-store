import ProductItem from '@/components/ui/product-item'
import { computeProductTotalPrice } from '@/utils/compute-total-price'
import { Product } from '@/types/product'
import { SectionTitle } from './section-title'

interface ProductListProps {
  products: Product[]
  category: string
}

export const ProductList = ({ products, category }: ProductListProps) => {
  return (
    <div className="w-full max-w-[1250px] my-8 px-5 m-auto">
      <SectionTitle>{category}</SectionTitle>
      <div className="flex w-full gap-6 max-md:gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
        ))}
      </div>
    </div>
  )
}
