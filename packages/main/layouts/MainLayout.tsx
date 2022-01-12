import { PropsWithChildren } from 'react'
import { Container } from 'ui'

import { MainBar, MainFooter } from '../components'

export function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Container fill>
      <MainBar />
      <Container page grow>
        {children}
      </Container>
      <MainFooter />
    </Container>
  )
}
