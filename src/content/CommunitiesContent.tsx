import Loading from '@src/components/atoms/Loading'
import CommunitiesGrid from '@src/components/organisms/CommunitiesGrid'
import { usePublicCommunities } from '@src/model/Community'

export default function CommunitiesContent() {
  const communities = usePublicCommunities()
  if (!communities) return <Loading />

  return (
    <CommunitiesGrid communities={communities} />
  )
}
