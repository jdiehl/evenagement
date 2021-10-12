import { useRouter } from 'next/router'

import { useUser } from '@src/context/UserContext'
import EventForm from '@src/fragments/EventForm'
import { getEventRef, setMemberRole } from '@src/model/CommunityEvent'

interface EventNewEditProps {
  id: string
  eventId?: string
}

export default function EventNewEdit({ id, eventId }: EventNewEditProps) {
  const router = useRouter()
  const { user } = useUser()

  const eventRef = getEventRef(id, eventId)

  const onClose = async (saved: boolean) => {
    if (!eventId) {
      // add the current user as admin for created event
      await setMemberRole(eventRef, user, 'organizer')
    }
    router.push(saved ? `/communities/${id}/events/${eventRef.id}` : `/communities/${id}`)
  }

  return (
    <EventForm eventRef={eventRef} onClose={onClose} />
  )
}
