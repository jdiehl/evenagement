import { PropsWithChildren } from 'react'

import Container from './Container'

export default function ButtonBar({ children }: PropsWithChildren<{}>) {
  return (
    <Container row gap justify="end">
      {children}
    </Container>
  )
}
