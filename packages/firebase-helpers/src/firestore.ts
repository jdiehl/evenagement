import { getFirestore, collection as getCollection, collectionGroup as getCollectionGroup, CollectionReference, Query } from 'firebase/firestore'

export function collection<T>(name: string): CollectionReference<T> {
  return getCollection(getFirestore(), name) as CollectionReference<T>
}

export function collectionGroup<T>(name: string): Query<T> {
  return getCollectionGroup(getFirestore(), name) as Query<T>
}
