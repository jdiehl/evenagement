import { PropsWithChildren } from 'react'

import Container from './Container'

export default function Sidebar({ children }: PropsWithChildren<{}>) {
  return (
    <Container className="bg-primary-dark text-white w-80">
      {children}
    </Container>
  )
}
