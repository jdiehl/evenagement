import { useRouter } from 'next/router'

import Loading from '@src/components/Loading'
import Text from '@src/components/Text'
import UserProfileForm from '@src/fragments/UserProfileForm'
import { useMyUserProfileRef } from '@src/model/UserProfile'

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
