import Button from '@src/components/atoms/Button'
import Input from '@src/components/atoms/Input'
import { useUpdateForm } from '@src/lib/form'
import { UserProfile, Document } from '@src/lib/store'

interface ProfileFormProps {
  userProfile: Document<UserProfile>
  onClose?: () => void
}

export default function UserProfileForm({ userProfile, onClose }: ProfileFormProps) {
  const { register, handleSubmit } = useUpdateForm(userProfile)

  return (
    <form onSubmit={handleSubmit(onClose)}>
      <Input label="Name" {...register('name', { required: 'Please enter a name' })} />
      <Button className="my-4" tag="input">Update</Button>
    </form>
  )
}
