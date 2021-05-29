import Loading from '@src/components/atoms/Loading'
import CommunityEdit from '@src/components/organisms/CommunityEdit'
import Main from '@src/components/organisms/Main'
import { collections, useDoc } from '@src/lib/store'
import { useRouter } from 'next/router'

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
