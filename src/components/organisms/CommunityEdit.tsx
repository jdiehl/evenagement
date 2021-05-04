import { CloudArrowUp } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'

import ToastContext from '../../context/ToastContext'
import { Community, Document } from '../../lib/store'
import useBinding from '../../lib/useBinding'
import { storage } from '../../services/firestore'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface CommunityEditProps {
  community: Document<Community>,
  onClose: () => void
}

export default function CommunityEdit({ community, onClose }: CommunityEditProps) {
  const setToast = useContext(ToastContext)

  const [communityData, communityDataBinding] = useBinding(community.data())
  const [headerImage, setHeaderImage] = useState(undefined)
  const [headerImageSrc, setHeaderImageSrc] = useState(community.data().image)

  useEffect(() => {
    if (!headerImage) return
    const fr = new FileReader()
    fr.readAsDataURL(headerImage)
    fr.onload = (e) => {
      setHeaderImageSrc(e.target.result as string)
    }
  }, [headerImage])

  const onSave = async () => {
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
    <form>
      <div className="flex justify-between pb-4">
        <Button type="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <img
            className="w-full object-cover h-80"
            src={headerImageSrc}
          />
          <Button floating className="absolute right-4 -bottom-4" tag="file-input" onChange={(e) => setHeaderImage(e.target.files[0])}>
            <CloudArrowUp />
          </Button>
        </div>
        <Input label="Community Name" {...communityDataBinding('name')}/>
        <Input type="textarea" rows={6} label="Description" {...communityDataBinding('description')} />
      </div>
    </form>
  )
}
