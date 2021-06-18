import Loading from '@src/components/atoms/Loading'
import CommunityDetails from '@src/components/organisms/CommunityDetails'
import { collections, useDoc } from '@src/lib/store'

interface CommunityContentProps {
  id: string
}

export default function CommunityContent({ id }: CommunityContentProps) {
  const community = useDoc(collections.community().doc(id))
  if (!community) return <Loading />
  return (
    <CommunityDetails community={community} />
  )
}
