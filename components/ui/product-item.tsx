import { productWithTotalPrice } from '@/utils/compute-total-price'
import { ArrowDownIcon } from 'lucide-react'
import Image from 'next/image'
import { Badge } from './badge'
import Link from 'next/link'
import { formateToBrl } from '@/utils/formate-to-brl'
import { StarsRating } from './stars-rating'

interface ProductItemProps {
  product: productWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product?id=${product.id}&category=${product.categoryId}`}>
      <div className="flex max-w-[9.75rem] flex-col gap-4 ">
        <div className="relative flex h-[10.625rem] w-[9.75rem] border  items-center justify-center gap-4 rounded-lg bg-black-01">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            className="h-[5.625rem] w-auto"
            style={{ objectFit: 'contain' }}
            alt={product.name}
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute left-2 bg-dark-purple top-2 text-white font-poppins font-semibold px-2 py-[0.125rem]">
              <ArrowDownIcon size={14} />
              <span>{product.discountPercentage}%</span>
            </Badge>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </span>
          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <span className="font-semibold">
                  {formateToBrl(Number(product.totalPrice))}
                </span>
                <span className="text-xs font-semibold text-dark-gray line-through opacity-75">
                  {formateToBrl(Number(product.basePrice))}
                </span>
              </>
            ) : (
              <span className="font-semibold">
                {formateToBrl(Number(product.basePrice))}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-1 flex gap-2 items-center">
        <StarsRating size="sm" rating={3} />
        <span className="text-light text-xs text-light-gray">(25)</span>
      </div>
    </Link>
  )
}

export default ProductItem
