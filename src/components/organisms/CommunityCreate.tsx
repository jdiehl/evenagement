import { useContext } from 'react'

import ToastContext from '../../context/ToastContext'
import { collections, Community, DocumentRef } from '../../lib/store'
import { storage } from '../../services/storage'
import CommunityForm from '../molecules/CommunityForm'

interface CommunityEditProps {
  onClose: (community?: DocumentRef<Community>) => void
}

export default function CommunityCreate({ onClose }: CommunityEditProps) {
  const setToast = useContext(ToastContext)

  const data = { name: '', description: '', image: undefined }

  const onSave = async (communityData: Community, headerImage?: Blob) => {
    try {
      if (communityData.name.length < 1) throw new Error('Invalid Name')
      const communityRef = await collections.community().add(communityData)
      if (headerImage) {
        const headerImageRef = storage().child(`communities/${communityRef.id}.jpg`)
        const snapshot = await headerImageRef.put(headerImage)
        communityData.image = await snapshot.ref.getDownloadURL()
        await communityRef.update({ image: communityData.image })
      }
      onClose(communityRef)
    } catch (e) {
      setToast({ title: 'Cannot update document', message: e.message, type: 'error' })
    }
  }

  return (
    <CommunityForm communityData={data} onSave={onSave} onCancel={() => onClose()}/>
  )
}
