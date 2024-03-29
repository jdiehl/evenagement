import { useRouter } from 'next/router'
import { useUser } from 'user'

import { CommunityForm } from '../components'
import { getCommunityRef, setCommunityRole } from '../model'

interface CommunityNewEditProps {
  id?: string
}

export function CommunityNewEdit({ id }: CommunityNewEditProps) {
  const router = useRouter()
  const { user } = useUser()

  const communityRef = getCommunityRef(id)

  const onClose = async (saved: boolean) => {
    if (!id) {
      // add the current user as admin for created communities
      setCommunityRole(communityRef, user!, 'organizer')
    }
    router.push(saved ? `/communities/${communityRef.id}` : '/communities')
  }

  return (
    <CommunityForm communityRef={communityRef} onClose={onClose} />
  )
}
