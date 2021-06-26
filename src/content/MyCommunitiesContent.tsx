import Loading from '@src/components/atoms/Loading'
import CommunitiesGrid from '@src/fragments/CommunitiesGrid'
import { useMyCommunities } from '@src/model/Community'

export default function MyCommunitiesContent() {
  const communities = useMyCommunities()
  if (!communities) return <Loading />

  return (
    <CommunitiesGrid communities={communities} />
  )
}
