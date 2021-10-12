import { Timestamp } from 'firebase/firestore'

export function convertTimestampsToDate(data: Record<string, any>) {
  for (const key of Object.keys(data)) {
    if (data[key] instanceof Timestamp) {
      data[key] = data[key].toDate()
    }
  }
  return data
}
