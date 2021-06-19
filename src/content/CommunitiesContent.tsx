import Loading from '@src/components/atoms/Loading'
import CommunitiesList from '@src/components/organisms/CommunitiesList'
import { usePublicCommunities } from '@src/model/Community'

export default function CommunitiesContent() {
  const communities = usePublicCommunities()
  if (!communities) return <Loading />

  return (
    <CommunitiesList communities={communities} />
  )
}
