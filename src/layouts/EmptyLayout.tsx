import { PropsWithChildren } from 'react'

import Container from '@src/components/atoms/Container'
import MainFooter from '@src/components/organisms/MainFooter'
import UserMenu from '@src/components/organisms/UserMenu'

export default function EmptyLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Container className="bg-hero-image bg-cover bg-left-bottom text-white" fill>
      <Container page grow>
        <Container direction="row" justify="end" align="center" className="h-12">
          <UserMenu />
        </Container>
        {children}
      </Container>
      <MainFooter bgTransparent />
    </Container>
  )
}
