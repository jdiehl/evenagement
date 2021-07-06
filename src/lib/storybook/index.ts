import { DocumentReference, DocumentSnapshot } from '@src/lib/firebase'

export function MockDocument<T>(document: T, onUpdate?: () => void): DocumentSnapshot<T> {
  return {
    data: () => document,
    id: 'id',
    ref: {
      update: onUpdate ?? (async (_: Partial<T>) => {}),
      collection: () => ({
        onSnapshot: (handler: any) => handler({ docs: [] })
      })
    },
  } as any as DocumentSnapshot<T>
}

export function MockRef<T>(): DocumentReference<T> {
  return {
    id: 'id',
    exists: false
  } as any as DocumentReference<T>
}
