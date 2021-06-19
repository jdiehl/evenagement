import { useState, useEffect } from 'react'

import { collection, CollectionReference, DocumentSnapshot, Timestamp } from '@src/lib/firestore'

const events = (communityId: string) => collection('communities').doc(communityId).collection('events') as CollectionReference<CommunityEvent>

export interface CommunityEvent {
  title: string
  date: Timestamp
  image: string
}

export function getEventRef(communityId: string, id?: string) {
  return events(communityId).doc(id)
}

// observe one event
export function useEvent(communityId: string, id: string) {
  const [result, setResult] = useState<DocumentSnapshot<CommunityEvent>>()

  useEffect(() => {
    if (!id) return
    const ref = events(communityId).doc(id)
    return ref.onSnapshot(snapshot => setResult(snapshot))
  }, [id])

  return result
}

// observe all events
export function useEvents(communityId: string) {
  const [result, setResult] = useState<DocumentSnapshot<CommunityEvent>[]>()

  useEffect(() => {
    const ref = events(communityId)
    return ref.onSnapshot(snapshot => setResult(snapshot.docs))
  }, [])

  return result
}
