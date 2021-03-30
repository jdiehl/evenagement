import { PropsWithChildren, Children } from 'react'

interface CarousellProps {
  className?: string
  index: number
}

export default function Carousell({ className, index, children }: PropsWithChildren<CarousellProps>) {
  const activeChild = Children.toArray(children)[index]
  return (
    <div className={className}>
      {activeChild}
    </div>
  )
}
