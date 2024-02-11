"use client";
import { Badge } from "@/components/ui/badge";
import { useCategories } from "@/hooks/get-categories";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

export default function Catalog() {
  const { data: categories } = useCategories();

  return (
    <div className="px-5">
      <Badge
        variant="outline"
        className="gap-1 border-2 my-8 border-violet px-3 py-[0.375rem] text-base uppercase"
      >
        <ShapesIcon />
        Catálogo
      </Badge>
      <div className="grid grid-cols-2 gap-8">
        {categories?.map((category) => (
          <CategoryItem key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
