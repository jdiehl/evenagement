import { PropsWithChildren } from 'react'

import Container from '@src/components/Container'

export default function ButtonBar({ children }: PropsWithChildren<{}>) {
  return (
    <Container row gap justify="end">
      {children}
    </Container>
  )
}
