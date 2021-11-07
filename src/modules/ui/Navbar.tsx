import { PropsWithChildren } from 'react'

import Container from './Container'

export default function Navbar({ children }: PropsWithChildren<{}>) {
  return (
    <nav className="bg-primary-dark border-b-2 border-tertiary text-white">
      <Container row align="center" page>
        {children}
      </Container>
    </nav>
  )
}
