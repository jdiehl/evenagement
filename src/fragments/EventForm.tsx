import { DocumentReference } from 'firebase/firestore'

import { useDocForm } from '@src/lib/form'
import { CommunityEvent } from '@src/model/CommunityEvent'
import Button from '@src/ui/Button'
import Container from '@src/ui/Container'
import DatePicker from '@src/ui/DatePicker'
import Form from '@src/ui/Form'
import ImageInput from '@src/ui/ImageInput'
import Input from '@src/ui/Input'

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
