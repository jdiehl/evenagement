import { PropsWithChildren } from 'react'
import { Container, HeroContainer } from 'ui'

import { MainFooter, UserMenu } from '../components'

export function EmptyLayout({ children }: PropsWithChildren<{}>) {
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
