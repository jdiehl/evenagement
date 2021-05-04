import { useRouter } from 'next/router'

import Loading from '../../../../components/atoms/Loading'
import EventDetails from '../../../../components/organisms/EventDetails'
import Main from '../../../../components/organisms/Main'
import { useDoc, collections } from '../../../../lib/store'
import { MockDocument } from '../../../../lib/storybook'
import { mockEvent } from '../../../../services/mock'

export default function Event() {
  const router = useRouter()
  const id = router.query.id as string
  const eventId = router.query.eventId as string

  if (!id || !eventId) return <Main><Loading /></Main>

  // subscribe to the community document
  const ref = collections.community().doc(id)
  const community = useDoc(ref)

  const event = MockDocument(mockEvent)

  return (
    <Main>
      {community && event ? <EventDetails community={community} event={event} /> : <Loading />}
    </Main>
  )
}
