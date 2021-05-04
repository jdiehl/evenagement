import { CloudArrowUp } from 'phosphor-react'
import { useEffect, useState } from 'react'

import { Community } from '../../lib/store'
import useBinding from '../../lib/useBinding'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface CommunityEditProps {
  communityData: Community
  onSave: (community: Community, headerImage?: Blob) => void
  onCancel: () => void
}

export default function CommunityForm({ communityData, onSave, onCancel }: CommunityEditProps) {
  const [data, dataBinding] = useBinding<Community>(communityData)
  const [headerImage, setHeaderImage] = useState(undefined)
  const [headerImageSrc, setHeaderImageSrc] = useState(undefined)

  useEffect(() => {
    if (!headerImage) return
    const fr = new FileReader()
    fr.readAsDataURL(headerImage)
    fr.onload = (e) => {
      setHeaderImageSrc(e.target.result as string)
    }
    return () => fr.abort()
  }, [headerImage])

  return (
    <form>
      <div className="flex justify-between pb-4">
        <Button type="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(data, headerImage)}>Save</Button>
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
        <Input label="Community Name" {...dataBinding('name')}/>
        <Input type="textarea" rows={6} label="Description" {...dataBinding('description')} />
      </div>
    </form>
  )
}
