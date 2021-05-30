import CommunityForm from '@src/components/molecules/CommunityForm'
import Main from '@src/components/organisms/Main'
import { collections } from '@src/lib/store'
import { useRouter } from 'next/router'

export default function Communities() {
  const router = useRouter()
  const id = router.query.id as string

  const communityRef = collections.community().doc(id)

  const onClose = () => {
    router.push(`/communities/${id}`)
  }

  return (
    <Main>
      <CommunityForm communityRef={communityRef} onClose={onClose} />
    </Main>
  )
}
