import { useRouter } from 'next/router'

import Loading from '../../../components/atoms/Loading'
import CommunityEdit from '../../../components/organisms/CommunityEdit'
import Main from '../../../components/organisms/Main'
import { collections, useDoc } from '../../../lib/store'

export default function Communities() {
  const router = useRouter()
  if (!router.query.id) return <Loading />

  const id = router.query.id.toString()

  const ref = collections.community().doc(id)
  const community = useDoc(ref)
  if (!community) return <Loading />

  const onClose = () => {
    router.push(`/communities/${id}`)
  }

  return (
    <Main>
      <CommunityEdit community={community} onClose={onClose}/>
    </Main>
  )
}
