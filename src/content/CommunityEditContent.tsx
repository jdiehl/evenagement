import { useRouter } from 'next/router'

import CommunityForm from '@src/components/molecules/CommunityForm'
import { getCommunityRef } from '@src/model/Community'

interface CommunityEditContentProps {
  id: string
}

export default function CommunityEditContent({ id }: CommunityEditContentProps) {
  const router = useRouter()

  const communityRef = getCommunityRef(id)
  const onClose = () => router.push(`/communities/${id}`)

  return (
    <CommunityForm communityRef={communityRef} onClose={onClose} />
  )
}
