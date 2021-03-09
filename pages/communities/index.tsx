import { useRouter } from 'next/router'

import CommunityCard from '../../components/CommunityCard'
import CommunityGrid from '../../components/CommunityGrid'
import Main from '../../components/Main'
import { Entities } from '../../services/collections'
import { collection, useQuery } from '../../services/firestore'

export default function Communities() {
  const router = useRouter()
  const query = collection(Entities.Community).limit(10)
  const docs = useQuery(query) || []

  return (
    <Main>
      <CommunityGrid>
        {docs.map(doc => (
          <CommunityCard key={doc.id} community={doc.data()} onClick={() => router.push(`communities/${doc.id}`)} />
        ))}
      </CommunityGrid>
    </Main>
  )
}
