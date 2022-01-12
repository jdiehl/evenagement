import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface NavbarBrandProps {
  href?: string
}

export function NavbarBrand({ href, children }: PropsWithChildren<NavbarBrandProps>) {
  const item = (
    <a className="px-6 py-1 text-xl text-white font-thin flex">
      {children}
    </a>
  )

  return href ? <Link href={href}>{item}</Link> : item
}
