import EventDetails from '@src/fragments/EventDetails'
import { useCommunity } from '@src/model/Community'
import { useEvent } from '@src/model/CommunityEvent'
import Loading from '@src/ui/Loading'

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
