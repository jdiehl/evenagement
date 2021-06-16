import Loading from '@src/components/atoms/Loading'
import CommunitiesList from '@src/components/organisms/CommunitiesList'
import Main from '@src/components/organisms/Main'
import { collections, useQuery } from '@src/lib/store'

export default function Communities() {
  const query = useQuery(collections.community())

  if (!query) return <Main><Loading /></Main>

  return (
    <Main>
      <CommunitiesList communities={query.docs} />
    </Main>
  )
}
