import Loading from '@src/components/atoms/Loading'
import EventDetails from '@src/components/organisms/EventDetails'
import { useCommunity } from '@src/model/Community'
import { useEvent } from '@src/model/CommunityEvent'

interface EventContentProps {
  id: string
  eventId: string
}

export default function EventContent({ id, eventId }: EventContentProps) {
  const community = useCommunity(id)
  const event = useEvent(id, eventId)

  if (!event) return <Loading />
  return (
    <EventDetails community={community} event={event} />
  )
}
