import { DocumentReference } from 'firebase/firestore'
import Button from 'ui/Button'
import Container from 'ui/Container'
import Form from 'ui/Form'
import Input from 'ui/Input'
import Loading from 'ui/Loading'

import { useDocForm } from '@src/lib/form'

import { UserProfile } from './model/UserProfile'

interface ProfileFormProps {
  userProfileRef: DocumentReference<UserProfile>
  onClose?: () => void
}

export default function UserProfileForm({ userProfileRef, onClose }: ProfileFormProps) {
  const { isReady, register, handleSubmit } = useDocForm(userProfileRef)

  if (!isReady) return <Loading />

  const buttons = <Button tag="input">Update</Button>

  return (
    <Container padding>
      <Form onSubmit={handleSubmit(onClose)} buttons={buttons}>
        <Input label="Name" {...register('name', { required: 'Please enter a name' })} />
      </Form>
    </Container>
  )
}
