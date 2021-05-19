import { useState } from 'react'

import { Community } from '../../lib/store'
import useBinding from '../../lib/useBinding'
import Button from '../atoms/Button'
import ImageInput from '../atoms/ImageInput'
import Input from '../atoms/Input'

interface CommunityEditProps {
  communityData: Community
  onSave: (community: Community, headerImage?: Blob) => void
  onCancel: () => void
}

export default function CommunityForm({ communityData, onSave, onCancel }: CommunityEditProps) {
  const [data, dataBinding] = useBinding<Community>(communityData)
  const [headerImage, setHeaderImage] = useState<File>()

  return (
    <form>
      <div className="flex flex-col space-y-4">
        <ImageInput height={250} src={data.image} onChange={(e) => setHeaderImage(e.target.value)} />
        <Input label="Community Name" {...dataBinding('name')}/>
        <Input type="textarea" rows={6} label="Description" {...dataBinding('description')} />
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(data, headerImage)}>Save</Button>
      </div>
    </form>
  )
}
