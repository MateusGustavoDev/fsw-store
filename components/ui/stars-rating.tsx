import { Star } from 'lucide-react'

interface StarsRatingProps {
  rating: number
  size?: 'md' | 'sm'
}

function calculeStars(rating: number) {
  type Stars = {
    id: number
    active: boolean
  }

  let stars: Stars[] = []

  for (let i = 0; i < 5; i++) {
    if (i <= rating - 1) {
      stars.push({ id: i, active: true })
    } else {
      stars.push({ id: i, active: false })
    }
  }

  return stars
}

export function StarsRating({ rating, size = 'md' }: StarsRatingProps) {
  const activeStars = calculeStars(rating)

  return (
    <div className="flex gap-2">
      {activeStars.map((star) =>
        star.active ? (
          <Star
            key={star.id}
            size={size === 'md' ? 16 : 14}
            fill="var(--light-purple)"
            className="text-[var(--light-purple)]"
          />
        ) : (
          <Star key={star.id} size={size === 'md' ? 16 : 14} color="var(--light-purple)" />
        ),
      )}
    </div>
  )
}
