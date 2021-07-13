import { PropsWithChildren, ReactNode } from 'react'

import Container from '@src/components/Container'
import Sidebar from '@src/components/Sidebar'

interface SidebarLayoutProps {
  menuContent: ReactNode
}

export default function SidebarLayout({ children, menuContent }: PropsWithChildren<SidebarLayoutProps>) {
  return (
    <Container row grow>
      <Container grow padding>
        {children}
      </Container>
      <Sidebar>
        {menuContent}
      </Sidebar>
    </Container>
  )
}
