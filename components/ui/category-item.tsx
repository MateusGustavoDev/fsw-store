'use client'
import { Category } from '@/types/category'
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'

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
      <Button
        variant="outline"
        className="w-[195px] max-md:py-2 py-3 hover:bg-black-01 rounded-lg gap-2 max-[1250px]:w-full flex justify-center"
      >
        {categoryIcons[category.slug as keyof typeof categoryIcons]}
        <span className="text-md max-xs:text-sm font-semibold">{category.name}</span>
      </Button>
    </Link>
  )
}

export default CategoryItem
