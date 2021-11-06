import { useRouter } from 'next/router'

import UserProfileForm from '@src/fragments/UserProfileForm'
import { useMyUserProfileRef } from '@src/model/UserProfile'
import Loading from '@src/ui/Loading'
import Text from '@src/ui/Text'

export default function ProfileEdit() {
  const userProfileRef = useMyUserProfileRef()
  const router = useRouter()

  const onClose = () => router.push('/communities/mine')

  if (!userProfileRef) return <Loading />
  return (
    <>
      <Text type="h1">Edit User Profile</Text>
      <UserProfileForm userProfileRef={userProfileRef} onClose={onClose}/>
    </>
  )
}
