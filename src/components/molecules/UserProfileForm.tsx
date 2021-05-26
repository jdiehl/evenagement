import { useForm, useFormState } from 'react-hook-form'

import { UserProfile, Document } from '../../lib/store'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface ProfileFormProps {
  userProfile: Document<UserProfile>
}

export default function UserProfileForm({ userProfile }: ProfileFormProps) {
  const { handleSubmit, control, register } = useForm({ mode: 'onBlur', defaultValues: userProfile.data() })
  const { errors } = useFormState({ control })

  const onSubmit = async (data: any) => {
    await userProfile.ref.set(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" error={errors.name?.message} {...register('name', { required: 'Please enter a name' })} />
      <Button className="my-4" tag="input">Update</Button>
    </form>
  )

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <Controller
  //       name="name"
  //       control={control}
  //       defaultValue={userProfile.data()?.name ?? ''}
  //       rules={{ required: 'Please enter a name' }}
  //       render={({ field, fieldState }) => <Input label="Name" error={fieldState.error?.message} {...field} />}
  //     />
  //     <Button className="my-4" tag="input">Update</Button>
  //   </form>
  // )
}
