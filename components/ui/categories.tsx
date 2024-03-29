import { useQuery } from '@tanstack/react-query'
import CategoryItem from './category-item'
import { api } from '@/lib/axios'
import { Category } from '@/types/category'

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await api(`/categories`)
    return response.data
  } catch (error) {
    throw error
  }
}

const Categories = () => {
  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  return (
    <div className="flex max-w-[1250px] mt-10 max-md:my-8 max-[1250px]:grid max-[1250px]:grid-cols-2 px-5 gap-2 justify-center m-auto w-full">
      {data && data.map((category) => <CategoryItem key={category.slug} category={category} />)}
    </div>
  )
}

export default Categories
