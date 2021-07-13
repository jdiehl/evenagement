import Link from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

interface NavBarItemProps {
  href: string
  active?: boolean
}

export default function NavbarItem({ active, children, href }: PropsWithChildren<NavBarItemProps>) {
  const router = useRouter()
  let className = 'select-none px-6 py-3 text-base text-medium text-white hover:bg-primary-light transition-all'
  if (active ?? (router && router.pathname === href)) {
    className += ' bg-primary'
  } else {
    className += ' bg-primary-dark'
  }
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}
