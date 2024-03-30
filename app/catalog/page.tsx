'use client'
import { useCategories } from '@/hooks/use-categories'
import { ShapesIcon } from 'lucide-react'
import CategoryItem from './components/category-item'
import { BadgeCategory } from '@/components/ui/badge-category'

export default function CatalogPage() {
  const { data: categories } = useCategories()

  return (
    <div className="px-5 max-w-[1250px] m-auto">
      <div className="my-8">
        <BadgeCategory>
          <ShapesIcon />
          Catálogo
        </BadgeCategory>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {categories?.map((category) => <CategoryItem key={category.slug} category={category} />)}
      </div>
    </div>
  )
}
