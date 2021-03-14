import { useEffect, useState } from 'react'

import { Entity } from './collections'
import firebase from './firebase'

// get a typed firestore collection
export function collection<T>(entity: Entity<T>) {
  return firebase.firestore().collection(entity.collection) as firebase.firestore.CollectionReference<T>
}

// subscribe to a firestore document in a react component
export function useDoc<T = any>(entity: Entity<T>, id: string): firebase.firestore.DocumentSnapshot<T> | null {
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    if (!id) return
    return collection<T>(entity).doc(id).onSnapshot(doc => setDoc(doc))
  }, [id])

  return doc
}

// subscribe to a firestore query in a react component
export function useQuery<T>(query: firebase.firestore.Query<T>, watch?: any): firebase.firestore.QueryDocumentSnapshot<T>[] | null {
  const [docs, setDocs] = useState(null)

  useEffect(() => {
    return query.onSnapshot(querySnapshot => setDocs(querySnapshot.docs))
  }, [watch])

  return docs
}
