import format from 'date-fns/format'

import Text from '@src/components//atoms/Text'
import CoverImage from '@src/components/atoms/CoverImage'
import Tile from '@src/components/atoms/Tile'
import TileBar from '@src/components/atoms/TileBar'
import { CommunityEvent } from '@src/model/CommunityEvent'

interface EventTileProps {
  event: CommunityEvent
  href?: string
}

export default function EventTile({ event, href }: EventTileProps) {
  return (
    <Tile size={44} href={href}>
      <CoverImage src={event.image} alt={event.title} />
      <TileBar>
        <Text size="m">{event.title || 'Unnamed Event'}</Text>
        <Text size="s">{format(event.date.toDate(), 'P – p')}</Text>
      </TileBar>
    </Tile>
  )
}
