import { PropsWithChildren, ReactNode } from 'react'
import Container from 'ui/Container'
import Sidebar from 'ui/Sidebar'

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
