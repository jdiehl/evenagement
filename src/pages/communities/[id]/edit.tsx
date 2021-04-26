import { useRouter } from 'next/router'
import { useState } from 'react'

import Loading from '../../../components/atoms/Loading'
import Toast from '../../../components/atoms/Toast'
import CommunityEdit from '../../../components/organisms/CommunityEdit'
import Main from '../../../components/organisms/Main'
import { Data, Entities } from '../../../services/collections'
import { collection, storage, useDoc } from '../../../services/firestore'

export default function Communities() {
  const router = useRouter()
  if (!router.query.id) return <Loading />

  const id = router.query.id.toString()
  const [error, setError] = useState('')

  const doc = useDoc(Entities.Community, id)
  if (!doc) return <Loading />

  const saveDoc = async (data: Data.Community, headerImage: File) => {
    try {
      if (headerImage) {
        const headerImageRef = storage().child(`communities/${doc.id}.jpg`)
        const snapshot = await headerImageRef.put(headerImage)
        data.image = await snapshot.ref.getDownloadURL()
      }
      await collection(Entities.Community).doc(id).update(data)
      router.push(`/communities/${id}`)
    } catch (e) {
      setError(`Unable to update document: ${e.message}`)
    }
  }

  return (
    <Main>
      <CommunityEdit doc={doc.data()} onSave={saveDoc}/>
      <Toast show={!!error} onHide={() => setError('')} type="error">{error}</Toast>
    </Main>
  )
}
