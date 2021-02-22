import { useEffect, useState } from 'react'
import { collection } from '../services/firebase'
import { Data } from '../services/collections'
import Main from '../components/Main'
import CommunityGrid from '../components/CommunityGrid'
import Loading from '../components/Loading'

export default function Communities() {
  const [communities, setCommunities] = useState(null)

  useEffect(() => {
    const ref = collection<Data.Community>('communities')
    const unsub = ref.onSnapshot(docs => setCommunities(docs))
    return () => unsub()
  })
  return (
    <Main>
      {communities ? <CommunityGrid communities={communities}/> : <Loading/>}
    </Main>
  )
}
