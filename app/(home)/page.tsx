'use client'
import Categories from '@/components/ui/categories'
import { ProductBanner } from './components/product-banner'
import { ProductList } from '@/components/ui/product-list'
import { useProductsByCategory } from '@/hooks/use-products-by-category'

export default function HomePage() {
  const { data: mouses } = useProductsByCategory('mouses')
  const { data: keyboards } = useProductsByCategory('keyboards')
  const { data: headphones } = useProductsByCategory('headphones')

  return (
    <>
      <div className="block lg:hidden">
        <ProductBanner imageUrl="/banners/banner-home-01.png" alt="Até 55% de desconto esse mês" />
      </div>
      <div className="hidden lg:block">
        <ProductBanner imageUrl="/banners/banner-home-01-full.png" alt="Até 55% de desconto esse mês" />
      </div>
      <Categories />
      {mouses && <ProductList products={mouses} />}

      <div className="block lg:hidden">
        <ProductBanner imageUrl="/banners/banner-home-02.png" alt="Até 55% de desconto esse mês" />
      </div>

      <div className="hidden gap-4 my-10 max-w-[1250px] px-5 m-auto lg:flex">
        <ProductBanner imageUrl="/banners/banner-mouses.png" alt="Até 55% de desconto esse mês" />
        <ProductBanner imageUrl="/banners/banner-fones.png" alt="Até 55% de desconto esse mês" />
      </div>

      {keyboards && <ProductList products={keyboards} />}

      <div className="block lg:hidden">
        <ProductBanner imageUrl="/banners/banner-home-03.png" alt="Até 55% de desconto esse mês" />
      </div>

      <div className="hidden lg:block max-w-[1400px] my-10 m-auto">
        <ProductBanner imageUrl="/banners/banner-frete.png" alt="Até 55% de desconto esse mês" />
      </div>

      {mouses && <ProductList products={mouses} />}
    </>
  )
}
