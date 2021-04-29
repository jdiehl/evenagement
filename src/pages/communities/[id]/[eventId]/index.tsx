import { useRouter } from 'next/router'

import Loading from '../../../../components/atoms/Loading'
import EventDetails from '../../../../components/organisms/EventDetails'
import Main from '../../../../components/organisms/Main'
import { useDoc, collections } from '../../../../lib/store'

export default function Event() {
  const router = useRouter()
  const id = router.query.id as string
  const eventId = router.query.eventId as string

  // subscribe to the community document
  const ref = collections.community().doc(id)
  const community = useDoc(ref)

  const mockEvent = { image: 'http://placekitten.com/400/400', title: 'Daily Session', date: new Date() }

  return (
    <Main>
      {community ? <EventDetails community={community.data()} event={mockEvent} /> : <Loading />}

    </Main>
  )
}
