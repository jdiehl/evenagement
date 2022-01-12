import { useEvent } from 'event'
import { Loading } from 'ui'

import { CommunityEvent } from '../components'
import { useCommunity } from '../model'

interface EventViewProps {
  id: string
  eventId: string
}

export function CommunityEventView({ id, eventId }: EventViewProps) {
  const community = useCommunity(id)
  const event = useEvent(eventId)

  if (!event) return <Loading />
  return (
    <CommunityEvent community={community!} event={event} />
  )
}
