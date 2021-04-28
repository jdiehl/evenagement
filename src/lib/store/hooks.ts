import { useState, useEffect } from 'react'

import { CollectionRef, Document, DocumentRef, QueryRef, Query } from './collections'

export function useDoc<T>(ref: DocumentRef<T>): Document<T> | null {
  const [doc, setDoc] = useState<Document<T>>(null)
  useEffect(() => {
    if (!ref) return
    return ref.onSnapshot(doc => setDoc(doc))
  }, [ref])
  return doc
}

export function useQuery<T>(ref: CollectionRef<T> | QueryRef<T>): Query<T> | null {
  const [query, setQuery] = useState<Query<T>>(null)
  useEffect(() => {
    if (!ref) return
    return ref.onSnapshot(query => setQuery(query))
  }, [ref])
  return query
}
