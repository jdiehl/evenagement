import { useRouter } from 'next/router'

import CommunityForm from '@src/components/molecules/CommunityForm'
import Main from '@src/components/organisms/Main'
import { collections } from '@src/lib/store'

export default function Communities() {
  const router = useRouter()
  const communityRef = collections.community().doc()

  const onClose = (saved: boolean) => {
    router.push(saved ? `/communities/${communityRef.id}` : '/communities')
  }

  return (
    <Main>
      <CommunityForm communityRef={communityRef} onClose={onClose} />
    </Main>
  )
}
