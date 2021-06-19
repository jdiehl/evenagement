import Button from '@src/components/atoms/Button'
import Input from '@src/components/atoms/Input'
import Loading from '@src/components/atoms/Loading'
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
      <Input label="Name" {...register('name', { required: 'Please enter a name' })} />
      <Button className="my-4" tag="input">Update</Button>
    </form>
  )
}
