import { useRouter } from 'next/router'
import { useUser } from 'user'

import { EventForm } from '../components'
import { getEventRef, setMemberRole } from '../model/CommunityEvent'

interface EventNewEditProps {
  id: string
  eventId?: string
}

export function EventNewEdit({ id, eventId }: EventNewEditProps) {
  const router = useRouter()
  const { user } = useUser()

  const eventRef = getEventRef(id, eventId)

  const onClose = async (saved: boolean) => {
    if (!eventId) {
      // add the current user as admin for created event
      await setMemberRole(eventRef, user!, 'organizer')
    }
    router.push(saved ? `/communities/${id}/events/${eventRef.id}` : `/communities/${id}`)
  }

  return (
    <EventForm eventRef={eventRef} onClose={onClose} />
  )
}
