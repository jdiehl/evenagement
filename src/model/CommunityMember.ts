import { useState, useEffect } from 'react'

import { collection, CollectionReference, DocumentSnapshot } from '@src/lib/firebase'

const members = (communityId: string) => collection('communities').doc(communityId).collection('members') as CollectionReference<CommunityMember>

export type CommunityMemberDocument = DocumentSnapshot<CommunityMember>

export interface CommunityMember {
  uid: string
  role: 'member' | 'admin'
  joined: Date
}

export function getCommunityMemberRef(communityId: string, id?: string) {
  return members(communityId).doc(id)
}

// observe one community
export function useCommunityMember(communityId: string, id: string) {
  const [result, setResult] = useState<CommunityMemberDocument>()

  useEffect(() => {
    if (!id) return
    const ref = members(communityId).doc(id)
    return ref.onSnapshot(snapshot => setResult(snapshot))
  }, [id])

  return result
}
