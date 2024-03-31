import { BadgeCategory } from '@/components/ui/badge-category'
import ProductItem from '@/components/ui/product-item'
import { CategoryName } from '@/helpers/category-name'
import { computeProductTotalPrice } from '@/utils/compute-total-price'
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from 'lucide-react'
import { getProductsByCategory } from '@/utils/get-products-by-category'

export default function CategoryPage({ params }: any) {
  const categoryIcons = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  }

  const products = getProductsByCategory(params.slug)

  return (
    <div className="px-5 w-full  max-w-[1260px] m-auto">
      <div className="my-8">
        <BadgeCategory>
          {categoryIcons[params.slug as keyof typeof categoryIcons]}
          {CategoryName[params.slug as keyof typeof CategoryName]}
        </BadgeCategory>
      </div>
      <div className="flex flex-wrap gap-7 justify-center ">
        {products?.map((product) => <ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
        {products?.map((product) => <ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
      </div>
    </div>
  )
}
