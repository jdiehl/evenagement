import { DocumentSnapshot, doc, onSnapshot, collection as getCollection, where, query, documentId } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import { collection } from '@src/lib/firebase'

import { useUser } from '../context/UserContext'

const userProfiles = () => collection<UserProfile>('userProfiles')

export type UserProfileDocument = DocumentSnapshot<UserProfile>

export interface UserProfile {
  name: string
  image?: string
}

export function useMyUserProfileRef() {
  const { user } = useUser()
  return user && doc(userProfiles(), user.uid)
}

// observe one event
export function useMyUserProfile() {
  const { user } = useUser()
  const [result, setResult] = useState<UserProfileDocument>()

  useEffect(() => {
    if (!user) return
    const ref = doc(userProfiles(), user.uid)
    return onSnapshot(ref, snapshot => setResult(snapshot))
  }, [user])

  return result
}

export function useCommunityMemberProfiles(communityId: string) {
  const [memberIds, setMemberIds] = useState<any>()
  const [result, setResult] = useState<UserProfileDocument[]>()

  useEffect(() => {
    if (!communityId) return
    const ref = getCollection(doc(collection('communities'), communityId), 'members')
    return onSnapshot(ref, snapshot => setMemberIds(snapshot.docs.map(doc => doc.id)))
  }, [communityId])

  useEffect(() => {
    if (!memberIds) return
    if(memberIds.length === 0) return setResult([])
    const ref = query(collection<UserProfile>('userProfiles'), where(documentId(), 'in', memberIds))
    return onSnapshot(ref, snapshot => setResult(snapshot.docs))
  }, [memberIds])

  return result
}
