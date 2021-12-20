import { PropsWithChildren } from 'react'

interface HorizontalListProps {
  className?: string
}

export function HorizontalList({ children, className }: PropsWithChildren<HorizontalListProps>) {
  return (
    <div className={'overflow-x-auto whitespace-nowrap w-full max-w-full space-x-4 ' + (className ?? '')}>
      {children}
    </div>
  )
}
