import { PropsWithChildren, Children } from 'react'

interface CarousellProps {
  className?: string
  width: number
  index: number
}

export function Carousell({ className, index, width, children }: PropsWithChildren<CarousellProps>) {
  const activeChild = Children.toArray(children)[index]
  return (
    <div style={{width: `${width / 4}rem`}}>
      {activeChild}
    </div>
  )
}
