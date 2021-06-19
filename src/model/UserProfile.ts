import { useState, useEffect } from 'react'

import { useUser } from '@src/context/UserContext'
import { collection, DocumentSnapshot } from '@src/lib/firestore'

const userProfiles = () => collection<UserProfile>('userProfiles')

export interface UserProfile {
  name: string
  image?: string
}

export function useMyUserProfileRef() {
  const { user } = useUser()
  return user && userProfiles().doc(user.uid)
}

// observe one event
export function useMyUserProfile() {
  const { user } = useUser()
  const [result, setResult] = useState<DocumentSnapshot<UserProfile>>()

  useEffect(() => {
    if (!user) return
    const ref = userProfiles().doc(user.uid)
    return ref.onSnapshot(snapshot => setResult(snapshot))
  }, [user])

  return result
}
