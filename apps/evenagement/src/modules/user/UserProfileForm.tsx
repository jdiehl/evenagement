import { DocumentReference } from 'firebase/firestore'
import { UserProfile } from 'types'
import { Button, Container, Form, Input, Loading }from 'ui'

import { useDocForm } from '@src/lib/form'

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
