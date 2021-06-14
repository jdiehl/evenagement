import firebase from 'firebase'
import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'

import Button from '@src/components/atoms/Button'
import Loading from '@src/components/atoms/Loading'
import CommunityGrid from '@src/components/molecules/CommunityGrid'
import CommunityTile from '@src/components/molecules/CommunityTile'
import Main from '@src/components/organisms/Main'
import UserContext from '@src/context/UserContext'
import { Document, Community, useQuery } from '@src/lib/store'

export default function Communities() {
  const user = useContext(UserContext)
  const [data, setData] = useState([] as Document<Community>[])

  const query = useQuery(firebase.firestore().collectionGroup('members')
    .where('role', '==', 'organizer')
    .where('uid', '==', user.uid))

  useEffect(() => {
    if (!query) { return }
    Promise.all(query?.docs.map(d => d.ref.parent.parent.get())).then(res => setData(res as any))
  }, [query])

  if (!query) return <Main><Loading /></Main>

  return (
    <Main>
      <div className="h-9 flex justify-end mt-4">
        <Button href="communities/create">Create new...</Button>
      </div>
      <CommunityGrid>
        {data.map(doc => (
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
