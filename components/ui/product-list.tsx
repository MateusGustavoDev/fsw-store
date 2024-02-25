import ProductItem from '@/components/ui/product-item'
import { computeProductTotalPrice } from '@/utils/compute-total-price'
import { Product } from '@/types/product'

interface ProductListProps {
  products: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className=" flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
      ))}
    </div>
  )
}
