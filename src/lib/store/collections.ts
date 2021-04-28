import firebase from 'firebase/app'

import { Community, Event } from './types'

export type CollectionRef<T> = firebase.firestore.CollectionReference<T>
export type QueryRef<T> = firebase.firestore.Query<T>
export type DocumentRef<T> = firebase.firestore.DocumentReference<T>
export type Document<T> = firebase.firestore.DocumentSnapshot<T>
export type Query<T> = firebase.firestore.QuerySnapshot<T>

function makeEntity<T>(name: string): () => CollectionRef<T> {
  return () => firebase.firestore().collection(name) as CollectionRef<T>
}

export const collections = {
  community: makeEntity<Community>('communities'),
  event: makeEntity<Event>('events')
}
