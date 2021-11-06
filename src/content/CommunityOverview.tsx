import CommunitiesGrid from '@src/fragments/CommunitiesGrid'
import { useCommunities } from '@src/model/Community'
import Loading from '@src/ui/Loading'

interface CommunityOverviewProps {
  mine?: boolean
}

export default function CommunityOverview({ mine }: CommunityOverviewProps) {
  const communities = useCommunities(mine)
  if (!communities) return <Loading />

  return (
    <CommunitiesGrid communities={communities} />
  )
}
