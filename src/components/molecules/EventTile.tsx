import format from 'date-fns/format'

import { Event } from '../../lib/store'

interface EventTileProps {
  event: Event
}

export default function EventTile({ event }: EventTileProps) {
  return (
    <div className="relative inline-block h-44 w-44">
      <img className="h-full w-full" src={event.image} />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black  bg-opacity-50 px-4 py-2 text-white">
        <h2 className=" font-medium truncate">{event.title || 'Unnamed Event'}</h2>
        <p className="text-xs">{format(event.date, 'P – p')}</p>
      </div>
    </div>
  )
}
