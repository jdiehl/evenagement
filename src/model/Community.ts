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
export function useCommunities(mine?: boolean) {
  const { user } = useUser()
  const [result, setResult] = useState<CommunityDocument[]>()

  // load public communities (only if mine is not set)
  useEffect(() => {
    if (mine) return
    const ref = communities().where('private', '!=', true)
    return ref.onSnapshot(snapshot => setResult(snapshot.docs))
  }, [mine])

  // load my communities (if mine is set)
  useEffect(() => {
    if (!mine || !user) return
    const ref = members().where('uid', '==', user.uid)
    return ref.onSnapshot(async (snapshot) => {
      const parents = await Promise.all(snapshot.docs.map(d => d.ref.parent.parent.get() as Promise<CommunityDocument>))
      setResult(parents)
    })
  }, [mine, user])

  return result
}
