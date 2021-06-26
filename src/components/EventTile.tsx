import format from 'date-fns/format'

import Text from '@src/components//Text'
import CoverImage from '@src/components/CoverImage'
import Tile from '@src/components/Tile'
import TileBar from '@src/components/TileBar'
import { CommunityEvent } from '@src/model/CommunityEvent'

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
