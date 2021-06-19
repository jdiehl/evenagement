import Link from 'next/link'

import Button from '@src/components/atoms/Button'
import LargeGrid from '@src/components/atoms/LargeGrid'
import CommunityTile from '@src/components/molecules/CommunityTile'
import { CommunityDocument } from '@src/model/Community'

interface CommunitiesListProps {
  communities: CommunityDocument[]
}

export default function CommunitiesGrid({ communities }: CommunitiesListProps) {
  return (
    <>
      <div className="h-9 flex justify-end mt-4">
        <Button href="/communities/create">Create new...</Button>
      </div>
      <LargeGrid>
        {communities.map(doc => (
          <Link key={doc.id} href={`/communities/${doc.id}`}>
            <a>
              <CommunityTile community={doc.data()} />
            </a>
          </Link>
        ))}
      </LargeGrid>
    </>
  )
}
