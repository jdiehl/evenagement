
import { useRouter } from 'next/router'

import CommunityCreate from '../../components/organisms/CommunityCreate'
import Main from '../../components/organisms/Main'
import { Community, DocumentRef } from '../../lib/store'

export default function Communities() {
  const router = useRouter()

  const onClose = (communityRef?: DocumentRef<Community>) => {
    router.push(communityRef ? `/communities/${communityRef.id}` : '/communities')
  }

  return (
    <Main>
      <CommunityCreate onClose={onClose}/>
    </Main>
  )
}
