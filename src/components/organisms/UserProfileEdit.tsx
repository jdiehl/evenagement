import { useContext } from 'react'

import UserProfileForm from '@src/components/molecules/UserProfileForm'
import UserContext from '@src/context/UserContext'
import { collections } from '@src/lib/store'

export default function UserProfileEdit() {
  const user = useContext(UserContext)
  const ref = user && collections.userProfile().doc(user.uid)

  return <UserProfileForm userProfileRef={ref} />
}
