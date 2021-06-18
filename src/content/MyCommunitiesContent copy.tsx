import firebase from 'firebase/app'
import { useEffect, useState } from 'react'

import CommunitiesList from '@src/components/organisms/CommunitiesList'
import { useUser } from '@src/context/UserContext'
import { Community, Document } from '@src/lib/store'

export default function MyCommunitiesContent() {
  const { user } = useUser()
  const [data, setData] = useState([] as Document<Community>[])

  useEffect(() => {
    const ref = firebase.firestore().collectionGroup('members')
    .where('role', 'in', ['member', 'organizer'])
    .where('uid', '==', user.uid)

    return ref.onSnapshot(async (snapshot) => {
      const data = await Promise.all(snapshot.docs.map(d => d.ref.parent.parent.get()))
      setData(data as any)
    })
  }, [user])

  return (
    <CommunitiesList communities={data} />
  )
}
