"use client";
import Categories from "@/components/ui/categories";
import { ProductBanner } from "./components/product-banner";
import { ProductList } from "@/components/ui/product-list";
import { SectionTitle } from "@/components/ui/section-title";
import { useProductsByCategory } from "@/hooks/use-products-by-category";

export default function HomePage() {
  const { data: mouses } = useProductsByCategory("mouses");
  const { data: keyboards } = useProductsByCategory("keyboards");
  const { data: headphones } = useProductsByCategory("headphones");

  return (
    <>
      <ProductBanner
        imageUrl="/banners/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
      />
      <Categories />
      <SectionTitle>Mouses</SectionTitle>
      {mouses && <ProductList products={mouses} />}
      <ProductBanner
        imageUrl="/banners/banner-home-02.png"
        alt="Até 55% de desconto esse mês"
      />
      <SectionTitle>teclados</SectionTitle>
      {keyboards && <ProductList products={keyboards} />}
      <ProductBanner
        imageUrl="/banners/banner-home-03.png"
        alt="Até 55% de desconto esse mês"
      />
      <SectionTitle>fones</SectionTitle>
      {headphones && <ProductList products={headphones} />}
    </>
  );
}
