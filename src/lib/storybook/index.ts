import { Document } from '@src/lib/store'

export function MockDocument<T>(document: T, onUpdate?: () => void): Document<T> {
  return {
    data: () => document,
    id: 'id',
    ref: {
      update: onUpdate ?? (async (t: Partial<T>) => {}),
      collection: () => ({
        onSnapshot: (handler) => handler({ docs: [] })
      })
    },
  } as any as Document<T>
}
