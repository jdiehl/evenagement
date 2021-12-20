import { Loading } from 'ui'

import { useCommunity } from '@community/model/Community'

import EventDetails from '../EventDetails'
import { useEvent } from '../model/CommunityEvent'

interface EventViewProps {
  id: string
  eventId: string
}

export default function EventView({ id, eventId }: EventViewProps) {
  const community = useCommunity(id)
  const event = useEvent(id, eventId)

  if (!event) return <Loading />
  return (
    <EventDetails community={community} event={event} />
  )
}
