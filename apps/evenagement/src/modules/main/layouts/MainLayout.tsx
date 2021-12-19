import { PropsWithChildren } from 'react'
import Container from 'ui/Container'

import MainBar from '../MainBar'
import MainFooter from '../MainFooter'

export default function MainLayout({ children }: PropsWithChildren<{}>) {
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
