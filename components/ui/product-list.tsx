import ProductItem from '@/components/ui/product-item'
import { computeProductTotalPrice } from '@/utils/compute-total-price'
import { Product } from '@/types/product'
import { SectionTitle } from './section-title'

interface ProductListProps {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="w-full max-w-[1250px] my-8 px-5 m-auto">
      <SectionTitle>Mouses</SectionTitle>
      <div className="flex w-full gap-4 lg:gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
        ))}
      </div>
    </div>
  )
}
