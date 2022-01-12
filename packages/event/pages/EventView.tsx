import { Loading } from 'ui'

import { EventDetails } from '../components'
import { useEvent } from '../model'

interface EventViewProps {
  eventId: string
}

export function EventView({ eventId }: EventViewProps) {
  const event = useEvent(eventId)

  if (!event) return <Loading />
  return (
    <EventDetails event={event} />
  )
}
