import { collection } from 'firebase-helpers'
import { User } from 'firebase/auth'
import { doc, onSnapshot, collection as getCollection, setDoc, deleteDoc, query, where, orderBy, DocumentReference } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Event, EventDocument, EventMemberRole } from 'types'

const events = () => collection<Event>('events')

export function getEventRef(id?: string) {
  const collection = events()
  return id == undefined ? doc(collection) : doc(collection, id)
}

// observe one event
export function useEvent(id: string) {
  const [result, setResult] = useState<EventDocument>()

  useEffect(() => {
    if (!id) return
    const ref = doc(events(), id)
    return onSnapshot(ref, snapshot => setResult(snapshot))
  }, [id])

  return result
}

// observe all events
export function useEvents() {
  const [result, setResult] = useState<EventDocument[]>()

  useEffect(() => {
    const ref = query(events(), where('communityId', '==', null))
    return onSnapshot(ref, snapshot => setResult(snapshot.docs))
  }, [])

  return result
}

// observe all events of a community
export function useEventsForCommunity(communityId: string) {
  const [result, setResult] = useState<EventDocument[]>()

  useEffect(() => {
    const ref = query(events(), where('communityId', '==', communityId))
    return onSnapshot(ref, snapshot => setResult(snapshot.docs))
  }, [])

  return result
}

export async function setMemberRole(eventRef: DocumentReference<Event>, user: User, role?: EventMemberRole) {
  const memberRef = doc(getCollection(eventRef, 'members'), user.uid)
  if (role) {
    await setDoc(memberRef, { uid: user.uid, role: 'organizer', registered: new Date() })
  } else {
    await deleteDoc(memberRef)
  }
}
