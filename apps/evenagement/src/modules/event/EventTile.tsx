import format from 'date-fns/format'
import CoverImage from 'ui/CoverImage'
import Text from 'ui/Text'
import Tile from 'ui/Tile'
import TileBar from 'ui/TileBar'

import { CommunityEvent } from './model/CommunityEvent'

interface EventTileProps {
  event: CommunityEvent
  href?: string
}

export default function EventTile({ event, href }: EventTileProps) {
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
