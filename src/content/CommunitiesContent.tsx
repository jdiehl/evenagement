import Loading from '@src/components/atoms/Loading'
import CommunitiesList from '@src/components/organisms/CommunitiesList'
import { collections, useQuery } from '@src/lib/store'

export default function CommunitiesContent() {
  const query = useQuery(collections.community())
  if (!query) return <Loading />

  return (
    <CommunitiesList communities={query.docs} />
  )
}
