import { PropsWithChildren } from 'react'

import Container from '@ui/Container'
import HeroContainer from '@ui/HeroContainer'

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
