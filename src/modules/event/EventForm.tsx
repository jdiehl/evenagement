import { DocumentReference } from 'firebase/firestore'

import { useDocForm } from '@src/lib/form'
import Button from '@ui/Button'
import Container from '@ui/Container'
import DatePicker from '@ui/DatePicker'
import Form from '@ui/Form'
import ImageInput from '@ui/ImageInput'
import Input from '@ui/Input'

import { CommunityEvent } from './model/CommunityEvent'

interface EventFormProps {
  eventRef: DocumentReference<CommunityEvent>
  onClose: (saved: boolean) => void
}

export default function EventForm({ eventRef, onClose }: EventFormProps) {
  const { register, registerFile, registerDatePicker, handleSubmit } = useDocForm(eventRef)
  const buttons = <>
    <Button type="outline" onClick={() => onClose(false)}>Cancel</Button>
    <Button tag="input">Save</Button>
  </>

  return (
    <Container padding>
      <Form onSubmit={handleSubmit(() => onClose(true))} buttons={buttons}>
        <ImageInput height={250} {...registerFile('image')} />
        <Input label="Event Name" {...register('name', { required: 'Please enter a name' })}/>
        <DatePicker label="Date" {...registerDatePicker('date')} />
      </Form>
    </Container>
  )
}