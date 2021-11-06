import { PropsWithChildren } from 'react'

import MainBar from '@src/fragments/MainBar'
import MainFooter from '@src/fragments/MainFooter'
import Container from '@src/ui/Container'

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
