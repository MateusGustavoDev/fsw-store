'use client'
import { Badge } from '@/components/ui/badge'
import { Category } from '@/types/category'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcons = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  }

  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex justify-center gap-2 rounded-lg py-2"
      >
        {categoryIcons[category.slug as keyof typeof categoryIcons]}
        <span className="text-xs font-semibold">{category.name}</span>
      </Badge>
    </Link>
  )
}

export default CategoryItem
