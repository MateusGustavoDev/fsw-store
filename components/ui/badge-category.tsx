import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export function BadgeCategory({ children }: BadgeProps) {
  return (
    <div className="gap-1 w-max flex font-semibold items-center rounded-full border-2 border-dark-purple px-3 py-[0.375rem] text-base uppercase">
      {children}
    </div>
  )
}
