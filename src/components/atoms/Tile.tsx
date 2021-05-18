import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface TileProps {
  size: number
  className?: string
  href?: string
}

export default function Tile({ children, className, size, href }: PropsWithChildren<TileProps>) {
  const style = { width: (size / 4) + 'rem', height: (size / 4) + 'rem' }

  const body = (
    <div className={'relative overflow-hidden rounded inline-block ' + (className ?? '')} style={style}>
      {children}
    </div>
  )

  if (href) {
    return (
      <Link href={href}>
        <a>{body}</a>
      </Link>
    )
  }
  return body
}
