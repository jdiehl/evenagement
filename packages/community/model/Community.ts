import { collection, collectionGroup } from 'firebase-helpers'
import { User } from 'firebase/auth'
import { DocumentReference, doc, onSnapshot, query, where, getDoc, collection as getCollection, setDoc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Community, CommunityMember, CommunityMemberRole, CommunityDocument } from 'types'
import { useUser } from 'user'

const communities = () => collection<Community>('communities')
const members = () => collectionGroup<CommunityMember>('members')

export function getCommunityRef(id?: string) {
  const collection = communities()
  return id == undefined ? doc(collection) : doc(collection, id)
}

// observe one community
export function useCommunity(id: string) {
  const [result, setResult] = useState<CommunityDocument>()

  useEffect(() => {
    if (!id) return
    const ref = doc(communities(), id)
    return onSnapshot(ref, snapshot => setResult(snapshot))
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
    const ref = query(communities(), where('private', '!=', true))
    return onSnapshot(ref, snapshot => setResult(snapshot.docs))
  }, [mine])

  // load my communities (if mine is set)
  useEffect(() => {
    if (!mine || !user) return
    const ref = query(members(), where('uid', '==', user.uid))
    return onSnapshot(ref, async (snapshot) => {
      const parents = await Promise.all(snapshot.docs.map(d => getDoc(d.ref.parent.parent!) as Promise<CommunityDocument>))
      setResult(parents)
    })
  }, [mine, user])

  return result
}

export async function setCommunityRole(communityRef: DocumentReference<Community>, user: User, role?: CommunityMemberRole) {
  const memberDoc = doc(getCollection(communityRef, 'members'), user.uid)
  if (role) {
    await setDoc(memberDoc, { uid: user.uid, role, joined: new Date() })
  } else {
    await deleteDoc(memberDoc)
  }
}
