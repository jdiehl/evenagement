import { PropsWithChildren } from 'react'

import { Container } from './Container'

export function Sidebar({ children }: PropsWithChildren<{}>) {
  return (
    <Container className="w-80 shrink-0 bg-primary-dark text-white">
      {children}
    </Container>
  )
}
