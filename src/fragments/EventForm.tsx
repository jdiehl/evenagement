import Button from '@src/components/Button'
import DatePicker from '@src/components/DatePicker'
import Form from '@src/components/Form'
import ImageInput from '@src/components/ImageInput'
import Input from '@src/components/Input'
import { DocumentReference } from '@src/lib/firebase'
import { useDocForm } from '@src/lib/form'
import { CommunityEvent } from '@src/model/CommunityEvent'

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
    <Form onSubmit={handleSubmit(() => onClose(true))} buttons={buttons}>
      <ImageInput height={250} {...registerFile('image')} />
      <Input label="Event Name" {...register('name', { required: 'Please enter a name' })}/>
      <DatePicker label="Date" {...registerDatePicker('date')} />
    </Form>
  )
}
