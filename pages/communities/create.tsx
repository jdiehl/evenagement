
import firebase from 'firebase'
import { useRouter } from 'next/router'

import CommunityEdit from '../../components/CommunityEdit'
import Main from '../../components/organisms/Main'
import { Data, Entities } from '../../services/collections'
import { collection } from '../../services/firestore'

export default function Communities() {
  const router = useRouter()

  const saveDoc = async (data: Data.Community) => {
    let doc: firebase.firestore.DocumentReference<Data.Community>
    try {
      doc = await collection(Entities.Community).add(data)
    } catch (e) {
      console.log('damn we\'r screwed', e)
    }

    router.push(`/communities/${doc.id}`)
  }

  return (
    <Main>
      <CommunityEdit doc={{ name: 'New Community' }} onSave={saveDoc}/>
    </Main>
  )
}
