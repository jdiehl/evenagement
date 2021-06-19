import { useState, useEffect } from 'react'

import { useUser } from '@src/context/UserContext'
import { collection, collectionGroup, DocumentSnapshot } from '@src/lib/firebase'

const communities = () => collection<Community>('communities')
const members = () => collectionGroup<CommunityMember>('members')

export type CommunityDocument = DocumentSnapshot<Community>

export interface Community {
  name: string
  description?: string
  image?: string
  private?: boolean
}

export interface CommunityMember {
  uid: string
  role: 'member' | 'admin'
  joined: Date
}

export function getCommunityRef(id?: string) {
  return communities().doc(id)
}

// observe one community
export function useCommunity(id: string) {
  const [result, setResult] = useState<CommunityDocument>()

  useEffect(() => {
    if (!id) return
    const ref = communities().doc(id)
    return ref.onSnapshot(snapshot => setResult(snapshot))
  }, [id])

  return result
}

// observe all public community
export function usePublicCommunities() {
  const [result, setResult] = useState<CommunityDocument[]>()

  useEffect(() => {
    const ref = communities().where('private', '!=', true)
    return ref.onSnapshot(snapshot => setResult(snapshot.docs))
  }, [])

  return result
}

// observe communities where the user is member or admin
export function useMyCommunities() {
  const { user } = useUser()
  const [result, setResult] = useState<CommunityDocument[]>()

  useEffect(() => {
    const ref = members().where('uid', '==', user.uid)
    return ref.onSnapshot(async (snapshot) => {
      const parents = await Promise.all(snapshot.docs.map(d => d.ref.parent.parent.get() as Promise<CommunityDocument>))
      setResult(parents)
    })
  }, [user])

  return result
}
