import { useRouter } from 'next/router'

import Loading from '../../../components/atoms/Loading'
import CommunityDetails from '../../../components/organisms/CommunityDetails'
import Main from '../../../components/organisms/Main'
import { collections, useDoc } from '../../../lib/store'

export default function Communities() {
  // require the router to be ready
  const router = useRouter()
  const id = router.query.id as string

  // subscribe to the community document
  const ref = collections.community().doc(id)
  const community = useDoc(ref)

  return (
    <Main>
      {community ? <CommunityDetails community={community} /> : <Loading />}
    </Main>
  )
}
