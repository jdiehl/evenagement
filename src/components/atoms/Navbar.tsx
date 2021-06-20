import { PropsWithChildren } from 'react'

import Container from './Container'

interface NavbarProps {
  useTransparentBackground?: boolean
}

export default function Navbar({ children }: PropsWithChildren<NavbarProps>) {
  return (
    <nav className="bg-primary-dark border-b-2 border-tertiary">
      <Container direction="row" align="center" page>
        {children}
      </Container>
    </nav>
  )
}
