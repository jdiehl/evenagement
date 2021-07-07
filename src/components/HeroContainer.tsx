import { PropsWithChildren } from 'react'

import Container from '@src/components/Container'

export default function HeroContainer({ children }: PropsWithChildren<{}>) {
  return (
    <Container className='bg-hero-image bg-cover bg-left-bottom text-white' fill>
      {children}
    </Container>
  )
}
