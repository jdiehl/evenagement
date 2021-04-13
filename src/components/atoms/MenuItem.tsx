import Link from 'next/link'
import { MouseEventHandler } from 'react'

interface MenuItemProps {
  label: string
  href?: string
  onClick?: MouseEventHandler
}

export default function MenuItem({ label, href, onClick }: MenuItemProps) {
  const css = 'transition-all whitespace-nowrap cursor-pointer block px-4 py-2 text-sm border-l-2 border-transparent hover:bg-gray-bg hover:border-primary'
  const item = <a className={css} role="menuitem" onClick={onClick}>{label}</a>
  return href ? <Link href={href}>{item}</Link> : item
}
