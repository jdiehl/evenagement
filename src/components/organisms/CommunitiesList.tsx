import Link from 'next/link'

import Button from '@src/components/atoms/Button'
import CommunityGrid from '@src/components/molecules/CommunityGrid'
import CommunityTile from '@src/components/molecules/CommunityTile'
import { Document, Community } from '@src/lib/store'

interface CommunitiesListProps {
  communities: Document<Community>[]
}

export default function CommunitiesList({ communities }: CommunitiesListProps) {
  return (
    <>
      <div className="h-9 flex justify-end mt-4">
        <Button href="communities/create">Create new...</Button>
      </div>
      <CommunityGrid>
        {communities.map(doc => (
          <Link key={doc.id} href={`communities/${doc.id}`}>
            <a>
              <CommunityTile community={doc.data()} />
            </a>
          </Link>
        ))}
      </CommunityGrid>
    </>
  )
}
