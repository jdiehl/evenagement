import firebase from 'firebase/app'
import { useContext, useEffect, useState } from 'react'

import Loading from '@src/components/atoms/Loading'
import CommunitiesList from '@src/components/organisms/CommunitiesList'
import Main from '@src/components/organisms/Main'
import UserContext from '@src/context/UserContext'
import { Community, Document, useQuery } from '@src/lib/store'

export default function Communities() {
  const user = useContext(UserContext)
  const [data, setData] = useState([] as Document<Community>[])

  const query = useQuery(user && firebase.firestore().collectionGroup('members')
    .where('role', 'in', ['member', 'organizer'])
    .where('uid', '==', user.uid), [user?.uid])

  useEffect(() => {
    if (!query) { return }
    Promise.all(query.docs.map(d => d.ref.parent.parent.get())).then(res => setData(res as any))
  }, [query])

  if (!query) return <Main><Loading /></Main>

  return (
    <Main>
      <CommunitiesList communities={data} />
    </Main>
  )
}
