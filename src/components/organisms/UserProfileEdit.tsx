import Loading from '@src/components/atoms/Loading'
import UserProfileForm from '@src/components/molecules/UserProfileForm'
import UserContext from '@src/context/UserContext'
import { collections, useDoc } from '@src/lib/store'
import { useContext } from 'react'

export default function UserProfileEdit() {
  const user = useContext(UserContext)
  const ref = user && collections.userProfile().doc(user.uid)
  const userProfile = useDoc(ref)

  return userProfile ? <UserProfileForm userProfile={userProfile} /> : <Loading />
}
