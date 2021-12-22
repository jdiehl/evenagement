import { PlusCircle } from 'phosphor-react'
import { MouseEventHandler } from 'react'
import { Container, Text, Tile } from 'ui'

interface AddTileProps {
  label: String
  onClick?: MouseEventHandler<HTMLElement>
}

export function AddTile({ label, onClick }: AddTileProps) {
  return (
    <Tile key={1} size={44} onClick={onClick}>
      <Container align="center" justify="center" padding border fill>
        <Text align="center" size="xl" color="gray" margin={2}>
          <PlusCircle />
        </Text>
        <Text align="center" size="l" color="gray">{label}</Text>
      </Container>
    </Tile>
  )
}
