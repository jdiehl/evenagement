import format from 'date-fns/format'

import { CommunityEvent } from '@src/model/CommunityEvent'
import CoverImage from '@src/ui/CoverImage'
import Text from '@src/ui/Text'
import Tile from '@src/ui/Tile'
import TileBar from '@src/ui/TileBar'

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
