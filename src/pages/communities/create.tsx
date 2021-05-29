import CommunityCreate from '@src/components/organisms/CommunityCreate'
import Main from '@src/components/organisms/Main'
import { Community, DocumentRef } from '@src/lib/store'
import { useRouter } from 'next/router'

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
