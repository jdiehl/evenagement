import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface FooterItemProps {
  href?: string
  external?: boolean
}

export function FooterItem({ href, external, children }: PropsWithChildren<FooterItemProps>) {

  // external button -> added target and do not use Link
  if (external) {
    return <a className="hover:underline" href={href} target="_blank" rel="noreferrer">{children}</a>
  }

  // use Link & a tag
  if (href) {
    return <Link href={href}>
      <a className="hover:underline" >{children}</a>
    </Link>
  }

  // use p tag
  return <p>{children}</p>
}
