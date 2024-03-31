'use client'
import { ShoppingCart } from 'lucide-react'
import { Button } from './button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'
import { BadgeCategory } from './badge-category'
import { useContext } from 'react'
import { CartContext } from '@/context/cart'
import { CartItem } from './cart-item'
import { ScrollArea } from './scroll-area'
import { CartResume } from './cart-resume'
import { createCheckout } from '@/app/actions/checkout'
import { loadStripe } from '@stripe/stripe-js'

export function Cart() {
  const { products, total, totalDiscount, subtotal } = useContext(CartContext)

  async function handleFinishPurchaseClick() {
    const checkout = await createCheckout(products)

    console.log(checkout)

    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

    // stripe?.redirectToCheckout({
    //   sessionId: checkout.id,
    // })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="border relative border-border hover:bg-black-01 rounded-lg w-10 h-10 p-0">
          <ShoppingCart size={22} />
          {products.length > 0 ? (
            <div className="p-1 px-3 absolute font-semibold text-xs -top-4 -right-2 rounded-full bg-dark-purple">
              {products.length}
            </div>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="max-w-96 w-full p-5">
        <div className="h-full w-full flex flex-col relative">
          <SheetHeader>
            <div className="mb-8">
              <BadgeCategory>
                <ShoppingCart size={22} />
                Carrinho
              </BadgeCategory>
            </div>
          </SheetHeader>
          <ScrollArea className="w-full h-full  overflow-y-auto pr-2">
            <div className="flex flex-col gap-5">
              {products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </ScrollArea>
          <div>
            <CartResume subtotal={subtotal} totalDiscount={totalDiscount} total={total} />
            <Button>Finalizar compra</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
