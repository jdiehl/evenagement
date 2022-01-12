import format from 'date-fns/format'
import { Event } from 'types'
import { CoverImage, Text, Tile, TileBar } from 'ui'

interface EventTileProps {
  event: Event
  href?: string
}

export function EventTile({ event, href }: EventTileProps) {
  return (
    <Tile size={44} href={href}>
      <CoverImage src={event.image} alt={event.name} />
      <TileBar>
        <Text size="l">{event.name || 'Unnamed Event'}</Text>
        <Text size="s">{format(event.date.toDate(), 'P – p')}</Text>
      </TileBar>
    </Tile>
  )
}
