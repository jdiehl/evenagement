import { useEffect, useState } from 'react'

import firebase from './firebase'

// get a typed firestore collection
export function collection<T>(name: string) {
  return firebase.firestore().collection(name) as firebase.firestore.CollectionReference<T>
}

// subscribe to a firestore document in a react component
export function useDoc<T = any>(collectionName: string, id: string): firebase.firestore.DocumentSnapshot<T> | null {
  const [doc, setDoc] = useState(null)

  useEffect(() => {
    if (!id) return
    return collection<T>(collectionName).doc(id).onSnapshot(doc => setDoc(doc))
  }, [id])

  return doc
}

// subscribe to a firestore query in a react component
export function useQuery<T>(query: firebase.firestore.Query<T>): firebase.firestore.QueryDocumentSnapshot<T>[] | null {
  const [docs, setDocs] = useState(null)

  useEffect(() => {
    return query.onSnapshot(querySnapshot => setDocs(querySnapshot.docs))
  }, [query])

  return docs
}
