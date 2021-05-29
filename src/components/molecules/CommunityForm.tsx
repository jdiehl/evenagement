import Button from '@src/components/atoms/Button'
import ImageInput from '@src/components/atoms/ImageInput'
import Input from '@src/components/atoms/Input'
import { useBinding } from '@src/lib/form'
import { Community } from '@src/lib/store'
import { useState } from 'react'

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

      <div className="flex justify-end space-x-4 py-4">
        <Button type="outline" onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(data, headerImage)}>Save</Button>
      </div>
    </form>
  )
}
