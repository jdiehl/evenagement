import { PropsWithChildren } from 'react'

import { Container } from './Container'

export function ButtonBar({ children }: PropsWithChildren<{}>) {
  return (
    <Container row gap justify="end">
      {children}
    </Container>
  )
}
