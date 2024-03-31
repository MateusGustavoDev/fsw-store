import { ProductBanner } from '@/app/(home)/components/product-banner'
import { Carousel, CarouselContent, CarouselItem } from '../../../components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

export function BannerCarousel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <Carousel plugins={[plugin.current]} className="max-w-[1210px] m-auto w-full ">
      <CarouselContent>
        <CarouselItem>
          <ProductBanner imageUrl="/banners/banner-home-01-full.png" alt="Até 55% de desconto esse mês" />
        </CarouselItem>
        <CarouselItem>
          <ProductBanner imageUrl="/banners/promo-perifericos.png" alt="" />
        </CarouselItem>
        <CarouselItem>
          <ProductBanner imageUrl="/banners/mouse-oferta.png" alt="Até 55% de desconto esse mês" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
