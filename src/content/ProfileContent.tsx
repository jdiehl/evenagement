import Text from '@src/components/atoms/Text'
import UserProfileForm from '@src/components/molecules/UserProfileForm'
import { useUser } from '@src/context/UserContext'
import { collections } from '@src/lib/store'

export default function ProfileContent() {
  const { user } = useUser()
  const ref = user && collections.userProfile().doc(user.uid)

  return (
    <>
      <Text type="h1">Edit User Profile</Text>
      <UserProfileForm userProfileRef={ref} />
    </>
  )
}
