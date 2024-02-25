import { Category } from '@/types/category'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="h-[9.375rem] w-full flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-category-items-gradient">
          <Image
            src={category.imageUrl}
            width={0}
            height={0}
            sizes="100vw"
            alt={category.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="rounded-bl-lg justify-center flex rounded-br-lg bg-black-01 py-2">
          <span className="text-sm text-center font-semibold">{category.name}</span>
        </div>
      </div>
    </Link>
  )
}

export default CategoryItem
