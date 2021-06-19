import firebase from 'firebase/app'

export type CollectionReference<T> = firebase.firestore.CollectionReference<T>
export type Query<T> = firebase.firestore.Query<T>
export type DocumentReference<T> = firebase.firestore.DocumentReference<T>
export type DocumentSnapshot<T> = firebase.firestore.DocumentSnapshot<T>
export type QuerySnapshot<T> = firebase.firestore.QuerySnapshot<T>
export type User = firebase.User
export type Timestamp = firebase.firestore.Timestamp

export const firestore = firebase.firestore

export function collection<T>(name: string): CollectionReference<T> {
  return firestore().collection(name) as CollectionReference<T>
}

export function collectionGroup<T>(name: string): Query<T> {
  return firestore().collectionGroup(name) as Query<T>
}
