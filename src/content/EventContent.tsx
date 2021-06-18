import Loading from '@src/components/atoms/Loading'
import EventDetails from '@src/components/organisms/EventDetails'
import { useDoc, collections, CommunityEvent } from '@src/lib/store'

interface EventContentProps {
  id: string
  eventId: string
}

export default function EventContent({ id, eventId }: EventContentProps) {
  const communityRef = collections.community().doc(id)
  const eventRef = communityRef.collection('events').doc(eventId)

  const community = useDoc(communityRef)
  const event = useDoc<CommunityEvent>(eventRef as any)

  if (!event) return <Loading />

  return (
    <EventDetails community={community} event={event} />
  )
}
