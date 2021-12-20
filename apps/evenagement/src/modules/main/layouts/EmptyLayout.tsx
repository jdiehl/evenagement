import { PropsWithChildren } from 'react'
import { Container, HeroContainer } from 'ui'

import MainFooter from '../MainFooter'
import UserMenu from '../UserMenu'

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
