import { formateToBrl } from '@/utils/formate-to-brl'
import { Separator } from './separator'

interface CartResumeProps {
  subtotal: number
  totalDiscount: number
  total: number
}

export function CartResume({ subtotal, totalDiscount, total }: CartResumeProps) {
  return (
    <div className="w-full mb-6">
      <Separator className="bg-border w-full h-[0.063]" />
      <div className="w-full flex items-center py-3 justify-between">
        <span className="text-sm">Subtotal:</span>
        <span className="text-sm">{formateToBrl(subtotal)}</span>
      </div>
      <Separator className="bg-border w-full h-[0.063]" />
      <Separator className="bg-border w-full h-[0.063]" />
      <div className="w-full flex items-center py-3 justify-between">
        <span className="text-sm">Entrega:</span>
        <span className="text-sm">GRÁTIS</span>
      </div>
      <Separator className="bg-border w-full h-[0.063rem]" />
      <div className="w-full flex items-center py-3 justify-between">
        <span className="text-sm">Descontos:</span>
        <span className="text-sm">- {formateToBrl(totalDiscount)}</span>
      </div>
      <Separator className="bg-border w-full h-[0.063]" />
      <div className="w-full flex items-center py-3 justify-between">
        <span className="font-bold">total:</span>
        <span className="font-bold">{formateToBrl(total)}</span>
      </div>
    </div>
  )
}
