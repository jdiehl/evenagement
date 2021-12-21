import { useRouter } from 'next/router'
import { Loading, Text } from 'ui'

import { UserProfileForm } from '../components/UserProfileForm'
import { useMyUserProfileRef } from '../model/UserProfile'

export function ProfileEdit() {
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
