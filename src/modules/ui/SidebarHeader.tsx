import Link from 'next/link'
import { PropsWithChildren } from 'react'

import Text from './Text'

interface SidebarHeaderProps {
  href?: string
}

export default function SidebarHeader({ href, children }: PropsWithChildren<SidebarHeaderProps>) {
  const item = (
    <Text type="h2" className="px-4">
      {children}
    </Text>
  )

  return href ? <Link href={href}>{item}</Link> : item
}
