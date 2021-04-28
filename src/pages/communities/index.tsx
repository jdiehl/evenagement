import Link from 'next/link'

import Button from '../../components/atoms/Button'
import Loading from '../../components/atoms/Loading'
import CommunityGrid from '../../components/molecules/CommunityGrid'
import CommunityTile from '../../components/molecules/CommunityTile'
import Main from '../../components/organisms/Main'
import { collections, useQuery } from '../../lib/store'

export default function Communities() {
  const ref = collections.community().limit(10)
  const query = useQuery(ref)

  if (!query) return <Main><Loading /></Main>

  return (
    <Main>
      <div className="h-9 flex justify-end mt-4">
        <Button href="communities/create">Create new...</Button>
      </div>
      <CommunityGrid>
        {query.docs.map(doc => (
          <Link key={doc.id} href={`communities/${doc.id}`}>
            <a>
              <CommunityTile community={doc.data()} />
            </a>
          </Link>
        ))}
      </CommunityGrid>
    </Main>
  )
}
