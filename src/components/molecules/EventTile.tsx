import format from 'date-fns/format'

import Tile from '@src/components/atoms/Tile'
import { CommunityEvent } from '@src/lib/store'

interface EventTileProps {
  event: CommunityEvent
  href?: string
}

export default function EventTile({ event, href }: EventTileProps) {
  return (
    <Tile size={44} href={href}>
      <img src={event.image} alt={event.title} className="h-full w-full" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black  bg-opacity-50 px-4 py-2 text-white">
        <h2 className=" font-medium truncate">{event.title || 'Unnamed Event'}</h2>
        <p className="text-xs">{format(event.date.toDate(), 'P – p')}</p>
      </div>
    </Tile>
  )
}
