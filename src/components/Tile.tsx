import Link from 'next/link'
import { CSSProperties, PropsWithChildren } from 'react'

interface TileProps {
  size?: number
  width?: number
  height?: number
  className?: string
  href?: string
}

export default function Tile({ children, className, size, width, height, href }: PropsWithChildren<TileProps>) {
  const style: CSSProperties = {}
  if (size) {
    height = width = size
  }
  if (width) style.width = (width / 4) + 'rem'
  if (height) style.height = (height / 4) + 'rem'

  className = 'relative overflow-hidden inline-block rounded shadow' + (className ? ` ${className}` : '')

  const props = { style, className }

  if (!href) {
    return <div {...props}>{children}</div>
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}
