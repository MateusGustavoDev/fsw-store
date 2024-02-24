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
    <div className="grid grid-cols-2 px-5 my-8 gap-x-4 gap-y-2">
      {data &&
        data.map((category) => (
          <CategoryItem key={category.slug} category={category} />
        ))}
    </div>
  )
}

export default Categories
