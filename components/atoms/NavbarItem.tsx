import Link from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

interface NavBarItemProps {
  href: string
  active?: boolean
}

export default function NavbarItem({ active, children, href }: PropsWithChildren<NavBarItemProps>) {
  const router = useRouter()
  let className = 'px-6 py-3 text-base text-medium hover:text-primary-dark transition-all border-b hover:border-primary-dark'
  if (active || (router && router.pathname === href)) {
    className += ' text-primary border-primary'
  } else {
    className += ' border-transparent'
  }
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}
