import Link from 'next/link'

import Button from '../../components/atoms/Button'
import CommunityGrid from '../../components/molecules/CommunityGrid'
import CommunityTile from '../../components/molecules/CommunityTile'
import Main from '../../components/organisms/Main'
import { Entities } from '../../services/collections'
import { collection, useQuery } from '../../services/firestore'

export default function Communities() {
  const query = collection(Entities.Community).limit(10)
  const docs = useQuery(query) || []

  return (
    <Main>
      <div className="h-9 flex justify-end mt-4">
        <Button href="communities/create">Create new...</Button>
      </div>
      <CommunityGrid>
        {docs.map(doc => (
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
