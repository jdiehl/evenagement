import { useRouter } from 'next/router'
import { collection, useQuery } from '../../services/firestore'
import { Data } from '../../services/collections'
import Main from '../../components/Main'
import CommunityGrid from '../../components/CommunityGrid'
import CommunityCard from '../../components/CommunityCard'

export default function Communities() {
  const router = useRouter()
  const query = collection<Data.Community>('communities').limit(10)
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
