import { DocumentReference } from 'firebase/firestore'
import { Event } from 'types'
import { Button, Container, DatePicker, Form, ImageInput, Input } from 'ui'
import { useDocForm } from 'use-doc-form'

interface EventFormProps {
  eventRef: DocumentReference<Event>
  communityId?: string
  onClose: (saved: boolean) => void
}

export function EventForm({ eventRef, onClose, communityId }: EventFormProps) {
  const { register, registerFile, registerDatePicker, handleSubmit, setValue } = useDocForm(eventRef)

  // set the community id if given
  setValue('communityId', communityId || null)

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
