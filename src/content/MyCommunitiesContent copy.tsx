import Loading from '@src/components/atoms/Loading'
import CommunitiesList from '@src/components/organisms/CommunitiesList'
import { useMyCommunities } from '@src/model/Community'

export default function MyCommunitiesContent() {
  const communities = useMyCommunities()
  if (!communities) return <Loading />
  return (
    <CommunitiesList communities={communities} />
  )
}
