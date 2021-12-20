import { PropsWithChildren } from 'react'

import { Container } from './Container'

export function HeroContainer({ children }: PropsWithChildren<{}>) {
  return (
    <Container className='bg-hero-image bg-cover bg-left-bottom text-white' fill>
      {children}
    </Container>
  )
}
