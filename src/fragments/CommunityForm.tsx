import { DocumentReference } from 'firebase/firestore'

import { useDocForm } from '@src/lib/form'
import { Community } from '@src/model/Community'
import Button from '@src/ui/Button'
import Container from '@src/ui/Container'
import Form from '@src/ui/Form'
import ImageInput from '@src/ui/ImageInput'
import Input from '@src/ui/Input'

interface CommunityEditProps {
  communityRef: DocumentReference<Community>
  onClose: (saved: boolean) => void
}

export default function CommunityForm({ communityRef, onClose }: CommunityEditProps) {
  const { register, registerFile, handleSubmit } = useDocForm(communityRef)
  const buttons = <>
    <Button type="outline" onClick={() => onClose(false)}>Cancel</Button>
    <Button tag="input">Save</Button>
  </>

  return (
    <Container padding>
      <Form onSubmit={handleSubmit(() => onClose(true))} buttons={buttons}>
        <ImageInput height={250} {...registerFile('image')} />
        <Input label="Community Name" {...register('name', { required: 'Please enter a name' })}/>
        <Input type="textarea" rows={6} label="Description" {...register('description')} />
        <Input type="checkbox" label="Private" {...register('private')} />
      </Form>
    </Container>
  )
}
