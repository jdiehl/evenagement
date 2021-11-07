import { DocumentReference } from 'firebase/firestore'

import { useDocForm } from '@src/lib/form'
import Button from '@ui/Button'
import Container from '@ui/Container'
import Form from '@ui/Form'
import ImageInput from '@ui/ImageInput'
import Input from '@ui/Input'

import { Community } from './model/Community'

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
