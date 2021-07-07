import Button from '@src/components/Button'
import ButtonBar from '@src/components/ButtonBar'
import Container from '@src/components/Container'
import Input from '@src/components/Input'
import Loading from '@src/components/Loading'
import { DocumentReference } from '@src/lib/firebase'
import { useDocForm } from '@src/lib/form'
import { UserProfile } from '@src/model/UserProfile'

interface ProfileFormProps {
  userProfileRef: DocumentReference<UserProfile>
  onClose?: () => void
}

export default function UserProfileForm({ userProfileRef, onClose }: ProfileFormProps) {
  const { isReady, register, handleSubmit } = useDocForm(userProfileRef)

  if (!isReady) return <Loading />

  return (
    <form onSubmit={handleSubmit(onClose)}>
      <Container gap>
        <Input label="Name" {...register('name', { required: 'Please enter a name' })} />
        <ButtonBar>
          <Button tag="input">Update</Button>
        </ButtonBar>
      </Container>
    </form>
  )
}
