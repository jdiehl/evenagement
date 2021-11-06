import { PropsWithChildren } from 'react'

import MainFooter from '@src/fragments/MainFooter'
import UserMenu from '@src/fragments/UserMenu'
import Container from '@src/ui/Container'
import HeroContainer from '@src/ui/HeroContainer'

export default function EmptyLayout({ children }: PropsWithChildren<{}>) {
  return (
    <HeroContainer>
      <Container page grow>
        <Container padding row justify="end" align="center">
          <UserMenu />
        </Container>
        {children}
      </Container>
      <MainFooter dark />
    </HeroContainer>
  )
}
