import { PropsWithChildren } from 'react'

export function TileBar({ children }: PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black text-white bg-opacity-50 px-4 py-2">
      {children}
    </div>

  )
}
