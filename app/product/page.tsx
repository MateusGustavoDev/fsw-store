"use client";
import { useProductById } from "@/hooks/use-product-by-id";
import { useSearchParams } from "next/navigation";
import ProductImages from "./components/products-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/utils/compute-total-price";
import { useProductsByCategory } from "@/hooks/use-products-by-category";
import { ProductList } from "@/components/ui/product-list";
import { SectionTitle } from "@/components/ui/section-title";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const id = searchParams.get("id");

  const { data } = useProductById({ category, id });
  const { data: recommended } = useProductsByCategory("mouses");

  return (
    <div>
      {data && recommended && (
        <div className="flex flex-col gap-6">
          <div>
            <ProductImages name={data.name} imagesUrls={data.imageUrls} />{" "}
            <ProductInfo product={computeProductTotalPrice(data)} />
          </div>
          <div className="mt-8">
            <SectionTitle>produtos Recomendados</SectionTitle>
            <ProductList products={recommended} />
          </div>
        </div>
      )}
    </div>
  );
}
