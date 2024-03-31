import CategoryItem from './category-item'
import { categories } from '@/db'

const Categories = () => {
  return (
    <div className="flex max-w-[1250px] mt-10 max-md:my-8 max-[1250px]:grid max-[1250px]:grid-cols-2 px-5 gap-2 justify-center m-auto w-full">
      {categories.map((category) => (
        <CategoryItem key={category.slug} category={category} />
      ))}
    </div>
  )
}

export default Categories
