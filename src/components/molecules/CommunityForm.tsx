import Button from '@src/components/atoms/Button'
import ImageInput from '@src/components/atoms/ImageInput'
import Input from '@src/components/atoms/Input'
import { DocumentReference } from '@src/lib/firebase'
import { useDocForm } from '@src/lib/form'
import { Community } from '@src/model/Community'

interface CommunityEditProps {
  communityRef: DocumentReference<Community>
  onClose: (saved: boolean) => void
}

export default function CommunityForm({ communityRef, onClose }: CommunityEditProps) {
  const { register, registerFile, handleSubmit } = useDocForm(communityRef)

  return (
    <form onSubmit={handleSubmit(() => onClose(true))}>
      <div className="flex flex-col space-y-4">
        <ImageInput height={250} {...registerFile('image')} />
        <Input label="Community Name" {...register('name', { required: 'Please enter a name' })}/>
        <Input type="textarea" rows={6} label="Description" {...register('description')} />
      </div>

      <div className="flex justify-end space-x-4 py-4">
        <Button type="outline" onClick={() => onClose(false)}>Cancel</Button>
        <Button tag="input">Save</Button>
      </div>
    </form>
  )
}
