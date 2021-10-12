import { getApp } from 'firebase/app'
import { getFirestore, collection as getCollection, collectionGroup as getCollectionGroup, CollectionReference, Query } from 'firebase/firestore'

export function store() {
  return getFirestore(getApp())
}

export function collection<T>(name: string): CollectionReference<T> {
  return getCollection(store(), name) as CollectionReference<T>
}

export function collectionGroup<T>(name: string): Query<T> {
  return getCollectionGroup(store(), name) as Query<T>
}
