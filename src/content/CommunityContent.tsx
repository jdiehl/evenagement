import Loading from '@src/components/atoms/Loading'
import CommunityDetails from '@src/components/organisms/CommunityDetails'
import { useCommunity } from '@src/model/Community'

interface CommunityContentProps {
  id: string
}

export default function CommunityContent({ id }: CommunityContentProps) {
  const community = useCommunity(id)
  if (!community) return <Loading />
  return (
    <CommunityDetails community={community} />
  )
}
