import { PropsWithChildren } from 'react'

import Container from '@src/components/Container'

interface NavbarProps {
  useTransparentBackground?: boolean
}

export default function Navbar({ children }: PropsWithChildren<NavbarProps>) {
  return (
    <nav className="bg-primary-dark border-b-2 border-tertiary">
      <Container row align="center" page>
        {children}
      </Container>
    </nav>
  )
}
