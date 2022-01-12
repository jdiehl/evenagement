import { useRouter } from 'next/router'
import { useUser } from 'user'

import { EventForm } from '../components'
import { getEventRef, setMemberRole } from '../model'

interface EventNewEditProps {
  id?: string
  eventId?: string
}

export function EventNewEdit({ id, eventId }: EventNewEditProps) {
  const router = useRouter()
  const { user } = useUser()

  const eventRef = getEventRef(eventId)

  const onClose = async (saved: boolean) => {
    if (!eventId) {
      // add the current user as admin for created event
      await setMemberRole(eventRef, user!, 'organizer')
    }
    if (id) {
      router.push(saved ? `/communities/${id}/events/${eventRef.id}` : `/communities/${id}`)
    } else {
      router.push(saved ? `/events/${eventRef.id}` : '/events')
    }
  }

  return (
    <EventForm eventRef={eventRef} onClose={onClose} communityId={id} />
  )
}
