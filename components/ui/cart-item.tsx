'use client'
import { formateToBrl } from '@/utils/formate-to-brl'
import Image from 'next/image'
import { Button } from './button'
import { Trash } from 'lucide-react'
import { SelectQuantity } from './select-quantity'
import { CartContext, CartProduct } from '@/context/cart'
import { useContext } from 'react'

interface CartItemProps {
  product: CartProduct
}

export function CartItem({ product }: CartItemProps) {
  const { removeProductFromCart, decreaseProductQuantity, increaseProductQuantity } = useContext(CartContext)

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id)
  }

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id)
  }

  return (
    <div className="flex">
      <div className="relative shrink-0 flex h-20 w-20 border items-center justify-center gap-4 rounded-lg bg-black-01">
        <Image
          src={product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-[70%] w-auto"
          style={{ objectFit: 'contain' }}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col w-full justify-between relative ml-4">
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-xs">{product.name}</span>
            {product.discountPercentage > 0 ? (
              <div className="flex gap-2 items-center">
                <span className="font-semibold text-sm">{formateToBrl(product.totalPrice)}</span>
                <span className="text-xs font-semibold text-dark-gray line-through opacity-75">
                  {formateToBrl(Number(product.basePrice))}
                </span>
              </div>
            ) : (
              <span className="text-sm font-semibold">{formateToBrl(Number(product.basePrice))}</span>
            )}
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Button
              variant="outline"
              className="w-9 h-9 p-2"
              onClick={() => removeProductFromCart(product.id, product.categoryId)}
            >
              <Trash size={16} />
            </Button>
          </div>
        </div>
        <SelectQuantity
          quantity={product.quantity}
          handleDecreaseQuantityClick={handleDecreaseProductQuantityClick}
          handleIncreaseQuantityClick={handleIncreaseProductQuantityClick}
        />
      </div>
    </div>
  )
}
