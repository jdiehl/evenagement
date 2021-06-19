import { useRouter } from 'next/router'

import Loading from '@src/components/atoms/Loading'
import Text from '@src/components/atoms/Text'
import UserProfileForm from '@src/components/molecules/UserProfileForm'
import { useMyUserProfileRef } from '@src/model/UserProfile'

export default function ProfileContent() {
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
