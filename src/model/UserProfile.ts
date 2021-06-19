import { useState, useEffect } from 'react'

import { useUser } from '@src/context/UserContext'
import { collection, DocumentSnapshot, firestore } from '@src/lib/firebase'

const userProfiles = () => collection<UserProfile>('userProfiles')

export type UserProfileDocument = DocumentSnapshot<UserProfile>

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
  const [result, setResult] = useState<UserProfileDocument>()

  useEffect(() => {
    if (!user) return
    const ref = userProfiles().doc(user.uid)
    return ref.onSnapshot(snapshot => setResult(snapshot))
  }, [user])

  return result
}

export function useCommunityMemberProfiles(communityId: string) {
  const [memberIds, setMemberIds] = useState<any>()
  const [result, setResult] = useState<UserProfileDocument[]>()

  useEffect(() => {
    if (!communityId) return
    const ref = collection('communities').doc(communityId).collection('members')
    return ref.onSnapshot(snapshot => setMemberIds(snapshot.docs.map(doc => doc.id)))
  }, [communityId])

  useEffect(() => {
    if (!memberIds) return
    if(memberIds.length === 0) return setResult([])
    const ref = collection<UserProfile>('userProfiles').where(firestore.FieldPath.documentId(), 'in', memberIds)
    return ref.onSnapshot(snapshot => setResult(snapshot.docs))
  }, [memberIds])

  return result
}
