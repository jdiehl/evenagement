import { useRouter } from 'next/router'

import Loading from '../../../components/atoms/Loading'
import CommunityEdit from '../../../components/organisms/CommunityEdit'
import Main from '../../../components/organisms/Main'
import { collections, useDoc } from '../../../lib/store'

export default function Communities() {
  const router = useRouter()

  const id = router.query.id as string

  const ref = collections.community().doc(id)
  const community = useDoc(ref)

  const onClose = () => {
    router.push(`/communities/${id}`)
  }

  return (
    <Main>
      {community ? <CommunityEdit community={community} onClose={onClose}/> : <Loading />}
    </Main>
  )
}
