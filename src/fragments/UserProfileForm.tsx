import { DocumentReference } from 'firebase/firestore'

import { useDocForm } from '@src/lib/form'
import { UserProfile } from '@src/model/UserProfile'
import Button from '@src/ui/Button'
import Container from '@src/ui/Container'
import Form from '@src/ui/Form'
import Input from '@src/ui/Input'
import Loading from '@src/ui/Loading'

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
