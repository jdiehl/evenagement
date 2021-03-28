import { PropsWithChildren, Children } from 'react'

interface CarousellProps {
  className: string
  index: number
}

export default function Carousell({ className, index, children }: PropsWithChildren<CarousellProps>) {
  const activeChild = Children.toArray(children)[index]
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div className="absolute inset-0">
        {activeChild}
      </div>
    </div>
  )
}
