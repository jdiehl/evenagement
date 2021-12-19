import Loading from 'ui/Loading'

import CommunitiesGrid from '../CommunitiesGrid'
import { useCommunities } from '../model/Community'

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
