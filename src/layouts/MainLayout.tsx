import { PropsWithChildren } from 'react'

import Container from '@src/components/Container'
import MainBar from '@src/fragments/MainBar'
import MainFooter from '@src/fragments/MainFooter'

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
