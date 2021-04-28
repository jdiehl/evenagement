
import firebase from 'firebase/app'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Toast from '../../components/atoms/Toast'
import CommunityEdit from '../../components/organisms/CommunityEdit'
import Main from '../../components/organisms/Main'
import { collections, Community } from '../../lib/store'
import { storage } from '../../services/firestore'

export default function Communities() {
  const router = useRouter()
  const [error, setError] = useState('')

  const saveDoc = async (community: Community, headerImage: File) => {
    let doc: firebase.firestore.DocumentReference<Community>
    try {
      doc = await collections.community().add(community)
      if (headerImage) {
        const headerImageRef = storage().child(`communities/${doc.id}.jpg`)
        const snapshot = await headerImageRef.put(headerImage)
        community.image = await snapshot.ref.getDownloadURL()
        await doc.update({ image: community.image })
      }
      router.push(`/communities/${doc.id}`)
    } catch (e) {
      setError(`Unable to create document: ${e.message}`)
    }
  }

  return (
    <Main>
      <CommunityEdit doc={{ name: 'New Community' }} onSave={saveDoc}/>
      <Toast show={!!error} onHide={() => setError('')} type="error">{error}</Toast>
    </Main>
  )
}
