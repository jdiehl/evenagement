import { useRouter } from 'next/router'

import CommunityForm from '@src/components/molecules/CommunityForm'
import { collections } from '@src/lib/store'

interface CommunityEditContentProps {
  id: string
}

export default function CommunityEditContent({ id }: CommunityEditContentProps) {
  const router = useRouter()

  const communityRef = collections.community().doc(id)
  const onClose = () => router.push(`/communities/${id}`)

  return (
    <CommunityForm communityRef={communityRef} onClose={onClose} />
  )
}
