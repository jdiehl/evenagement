import { useRouter } from 'next/router'

import CommunityForm from '@src/components/molecules/CommunityForm'
import { useUser } from '@src/context/UserContext'
import { collections } from '@src/lib/store'

export default function CommunityCreateContent() {
  const router = useRouter()
  const communityRef = collections.community().doc()

  const { user } = useUser()

  const onClose = async (saved: boolean) => {
    await communityRef.collection('members').doc(user.uid).set({ uid: user.uid, role: 'organizer', joined: new Date() })
    router.push(saved ? `/communities/${communityRef.id}` : '/communities')
  }

  return (
    <CommunityForm communityRef={communityRef} onClose={onClose} />
  )
}
