import Loading from '@src/components/atoms/Loading'
import CommunityDetails from '@src/components/organisms/CommunityDetails'
import Main from '@src/components/organisms/Main'
import { collections, useDoc } from '@src/lib/store'
import { useRouter } from 'next/router'

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
