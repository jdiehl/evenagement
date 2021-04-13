import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface NavbarProps {
  href?: string
}

export default function NavbarBrand({ href, children }: PropsWithChildren<NavbarProps>) {
  const item = (
    <a className="px-6 py-1 text-xl font-thin flex">
      {children}
    </a>
  )

  return href ? <Link href={href}>{item}</Link> : item
}
