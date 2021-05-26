import { useContext } from 'react'

import ToastContext from '../../context/ToastContext'
import { storage } from '../../lib/storage'
import { Community, Document } from '../../lib/store'
import CommunityForm from '../molecules/CommunityForm'

interface CommunityEditProps {
  community: Document<Community>,
  onClose: () => void
}

export default function CommunityEdit({ community, onClose }: CommunityEditProps) {
  const setToast = useContext(ToastContext)

  const onSave = async (communityData: Community, headerImage?: Blob) => {
    try {
      if (communityData.name.length < 1) throw new Error('Invalid Name')
      if (headerImage) {
        const headerImageRef = storage().child(`communities/${community.id}.jpg`)
        const snapshot = await headerImageRef.put(headerImage)
        communityData.image = await snapshot.ref.getDownloadURL()
      }
      await community.ref.update(communityData)
      onClose()
    } catch (e) {
      setToast({ title: 'Cannot update document', message: e.message, type: 'error' })
    }
  }

  return (
    <CommunityForm communityData={community.data()} onSave={onSave} onCancel={onClose} />
  )
}
