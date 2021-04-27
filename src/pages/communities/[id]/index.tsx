import { useRouter } from 'next/router'

import CommunityDetails from '../../../components/organisms/CommunityDetails'
import Main from '../../../components/organisms/Main'
import { Entities } from '../../../services/collections'
import { useDoc } from '../../../services/firestore'

export default function Communities() {
  // require the router to be ready
  const router = useRouter()
  const id = router.query.id as string

  // subscribe to the community document
  const communityDoc = useDoc(Entities.Community, id)
  const community = communityDoc?.data()

  return (
    <Main>
      <CommunityDetails community={community} />
    </Main>
  )
}
