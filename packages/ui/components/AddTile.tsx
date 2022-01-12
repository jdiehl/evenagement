import { PlusCircle } from 'phosphor-react'
import { MouseEventHandler } from 'react'

import { Container } from './Container'
import { Text } from './Text'
import { Tile } from './Tile'

interface AddTileProps {
  label: string
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
}

export function AddTile({ label, href, onClick }: AddTileProps) {
  return (
    <Tile key={1} size={44} onClick={onClick} href={href}>
      <Container align="center" justify="center" padding border fill>
        <Text align="center" size="xl" color="gray" margin={2}>
          <PlusCircle />
        </Text>
        <Text align="center" size="l" color="gray">{label}</Text>
      </Container>
    </Tile>
  )
}
