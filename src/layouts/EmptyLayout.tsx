import { PropsWithChildren } from 'react'

import Container from '@src/components/Container'
import HeroContainer from '@src/components/HeroContainer'
import MainFooter from '@src/fragments/MainFooter'
import UserMenu from '@src/fragments/UserMenu'

export default function EmptyLayout({ children }: PropsWithChildren<{}>) {
  return (
    <HeroContainer>
      <Container page grow>
        <Container padding row justify="end" align="center">
          <UserMenu />
        </Container>
        {children}
      </Container>
      <MainFooter bgTransparent />
    </HeroContainer>
  )
}
