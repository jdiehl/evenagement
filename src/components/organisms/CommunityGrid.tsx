import Link from 'next/link'
import { useContext } from 'react'

import Button from '@src/components/atoms/Button'
import Loading from '@src/components/atoms/Loading'
import CommunityTile from '@src/components/molecules/CommunityTile'
import UserContext from '@src/context/UserContext'
import { Community, QueryRef, useQuery, collections } from '@src/lib/store'

type Filter = 'mine'
interface CommunityGridProps {
  filter?: Filter
}

function makeRef(filter?: Filter): undefined | QueryRef<Community> {
  const user = useContext(UserContext)
  switch (filter) {
    case 'mine': return user && collections.community().where('members', 'array-contains', user.uid)
    default: return collections.community()
  }
}

export default function CommunityGrid({ filter }: CommunityGridProps) {
  const ref = makeRef(filter)
  const query = useQuery(ref, !!ref)

  if (!query) return <Loading />

  return (
    <div>
      <div className="h-9 flex justify-end mt-4">
        <Button href="communities/create">Create new...</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
        {query.docs.map(doc => (
          <Link key={doc.id} href={`communities/${doc.id}`}>
            <a>
              <CommunityTile community={doc.data()} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
