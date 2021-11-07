import { doc, CollectionReference, DocumentSnapshot, collection as getCollection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'

import { collection } from '@src/lib/firebase'

const members = (communityId: string) => getCollection(doc(collection('communities'), communityId), 'members') as CollectionReference<CommunityMember>

export type CommunityMemberDocument = DocumentSnapshot<CommunityMember>

export interface CommunityMember {
  uid: string
  role: 'member' | 'admin'
  joined: Date
}

export function getCommunityMemberRef(communityId: string, id?: string) {
  return doc(members(communityId), id)
}

// observe one community
export function useCommunityMember(communityId: string, id: string) {
  const [result, setResult] = useState<CommunityMemberDocument>()

  useEffect(() => {
    if (!id) return
    const ref = doc(members(communityId), id)
    return onSnapshot(ref, snapshot => setResult(snapshot))
  }, [id])

  return result
}
