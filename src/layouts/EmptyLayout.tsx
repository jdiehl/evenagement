import { PropsWithChildren } from 'react'

import Container from '@src/components/Container'
import MainFooter from '@src/fragments/MainFooter'
import UserMenu from '@src/fragments/UserMenu'

export default function EmptyLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Container className="bg-hero-image bg-cover bg-left-bottom text-white" fill>
      <Container page grow>
        <Container row justify="end" align="center" className="h-12">
          <UserMenu />
        </Container>
        {children}
      </Container>
      <MainFooter bgTransparent />
    </Container>
  )
}
