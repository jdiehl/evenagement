import { useRouter } from 'next/router'
import { useContext } from 'react'

import CommunityForm from '@src/components/molecules/CommunityForm'
import Main from '@src/components/organisms/Main'
import UserContext from '@src/context/UserContext'
import { collections } from '@src/lib/store'

export default function Communities() {
  const router = useRouter()
  const communityRef = collections.community().doc()

  const user = useContext(UserContext)

  const onClose = async (saved: boolean) => {
    await communityRef.collection('members').doc(user.uid).set({ uid: user.uid, role: 'organizer', joined: new Date() })
    router.push(saved ? `/communities/${communityRef.id}` : '/communities')
  }

  return (
    <Main>
      <CommunityForm communityRef={communityRef} onClose={onClose} />
    </Main>
  )
}
