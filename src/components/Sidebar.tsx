import { PropsWithChildren } from 'react'

import Container from './Container'

export default function Sidebar({ children }: PropsWithChildren<{}>) {
  return (
    <Container className="w-80 flex-shrink-0 bg-primary-dark text-white">
      {children}
    </Container>
  )
}
