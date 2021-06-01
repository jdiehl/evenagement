import { useRouter } from 'next/router'

import Loading from '@src/components/atoms/Loading'
import EventDetails from '@src/components/organisms/EventDetails'
import Main from '@src/components/organisms/Main'
import { useDoc, collections, CommunityEvent } from '@src/lib/store'

export default function Event() {
  const router = useRouter()
  const id = router.query.id as string
  const eventId = router.query.eventId as string

  // subscribe to the community document
  const communityRef = collections.community().doc(id)
  const community = useDoc(communityRef)

  // subscribe to the event document
  const eventRef = communityRef.collection('events').doc(eventId)
  const event = useDoc<CommunityEvent>(eventRef as any)

  if (!event) return <Main><Loading /></Main>

  return (
    <Main>
      <EventDetails community={community} event={event} />
    </Main>
  )
}
