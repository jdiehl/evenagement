import { PropsWithChildren, ReactNode } from 'react'

import Container from '@src/components/Container'
import Sidebar from '@src/components/Sidebar'

export default function SidebarLayout({ children, menuContent }: PropsWithChildren<{ menuContent: ReactNode }>) {
  return (
    <Container row>
      <Container grow padding>
        {children}
      </Container>
      <Sidebar>
        {menuContent}
      </Sidebar>
    </Container>
  )
}
