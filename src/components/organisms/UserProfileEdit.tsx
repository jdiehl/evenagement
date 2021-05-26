import { useContext } from 'react'

import UserContext from '../../context/UserContext'
import { collections, useDoc } from '../../lib/store'
import Loading from '../atoms/Loading'
import UserProfileForm from '../molecules/UserProfileForm'

export default function UserProfileEdit() {
  const user = useContext(UserContext)
  const ref = user && collections.userProfile().doc(user.uid)
  const userProfile = useDoc(ref)

  return userProfile ? <UserProfileForm userProfile={userProfile} /> : <Loading />
}
