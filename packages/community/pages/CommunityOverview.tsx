import { Loading } from 'ui'

import { CommunitiesGrid } from '../components'
import { useCommunities } from '../model'

interface CommunityOverviewProps {
  mine?: boolean
}

export function CommunityOverview({ mine }: CommunityOverviewProps) {
  const communities = useCommunities(mine)
  if (!communities) return <Loading />

  return (
    <CommunitiesGrid communities={communities} />
  )
}
