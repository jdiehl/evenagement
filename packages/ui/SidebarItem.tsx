import Link from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

interface SidebarItemProps {
  href: string
  active?: boolean
}

export function SidebarItem({ active, children, href }: PropsWithChildren<SidebarItemProps>) {
  const router = useRouter()
  let className = 'select-none px-4 py-1 underline hover:bg-primary-light transition-all'
  if (active ?? (router && router.pathname === href)) {
    className += ' bg-primary'
  }
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}
