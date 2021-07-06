import { useRouter } from 'next/router'

import { useUser } from '@src/context/UserContext'
import CommunityForm from '@src/fragments/CommunityForm'
import { getCommunityRef } from '@src/model/Community'

interface CommunityNewEditProps {
  id?: string
}

export default function CommunityNewEdit({ id }: CommunityNewEditProps) {
  const router = useRouter()
  const { user } = useUser()

  const communityRef = getCommunityRef(id)

  const onClose = async (saved: boolean) => {
    if (!id) {
      // add the current user as admin for created communities
      await communityRef.collection('members').doc(user.uid).set({ uid: user.uid, role: 'organizer', joined: new Date() })
    }
    router.push(saved ? `/communities/${communityRef.id}` : '/communities')
  }

  return (
    <CommunityForm communityRef={communityRef} onClose={onClose} />
  )
}
