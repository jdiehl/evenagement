import { collection } from 'firebase-helpers'
import { User } from 'firebase/auth'
import { CollectionReference, DocumentReference, doc, onSnapshot, collection as getCollection, setDoc, deleteDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { CommunityEvent, CommunityEventDocument, CommunityEventMemberRole } from 'types'

const events = (communityId: string) => getCollection(doc(collection('communities'), communityId), 'events') as CollectionReference<CommunityEvent>

export function getEventRef(communityId: string, id?: string) {
  return doc(events(communityId), id)
}

// observe one event
export function useEvent(communityId: string, id: string) {
  const [result, setResult] = useState<CommunityEventDocument>()

  useEffect(() => {
    if (!id) return
    const ref = doc(events(communityId), id)
    return onSnapshot(ref, snapshot => setResult(snapshot))
  }, [id])

  return result
}

// observe all events
export function useEvents(communityId: string) {
  const [result, setResult] = useState<CommunityEventDocument[]>()

  useEffect(() => {
    const ref = events(communityId)
    return onSnapshot(ref, snapshot => setResult(snapshot.docs))
  }, [])

  return result
}

export async function setMemberRole(eventRef: DocumentReference<CommunityEvent>, user: User, role?: CommunityEventMemberRole) {
  const memberRef = doc(getCollection(eventRef, 'members'), user.uid)
  if (role) {
    await setDoc(memberRef, { uid: user.uid, role: 'organizer', registered: new Date() })
  } else {
    await deleteDoc(memberRef)
  }
}
