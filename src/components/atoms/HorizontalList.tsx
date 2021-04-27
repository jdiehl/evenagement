import { PropsWithChildren } from 'react'

export default function HorizontalList({ children }: PropsWithChildren<{}>) {
  return (
    <div className="overflow-x-scroll whitespace-nowrap w-full max-w-full space-x-4">
      {children}
    </div>
  )
}
