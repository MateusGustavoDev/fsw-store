import { mouses, monitors, speakers, keyboards, mousepads, headphones } from '@/db'
import { Product } from '@/types/product'

export function getProductsByCategory(category: string | null): Product[] | undefined {
  switch (category) {
    case 'mouses':
      return mouses
    case 'keyboards':
      return keyboards
    case 'headphones':
      return headphones
    case 'monitors':
      return monitors
    case 'mousepads':
      return mousepads
    case 'speakers':
      return speakers
    default:
      return undefined
  }
}
