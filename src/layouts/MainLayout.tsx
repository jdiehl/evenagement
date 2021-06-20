import { PropsWithChildren } from 'react'

import Container from '@src/components/atoms/Container'
import MainBar from '@src/components/organisms/MainBar'
import MainFooter from '@src/components/organisms/MainFooter'

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
