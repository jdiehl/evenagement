import firebase from 'firebase'

export function convertTimestampsToDate(data: Record<string, any>) {
  for (const key of Object.keys(data)) {
    if (data[key] instanceof firebase.firestore.Timestamp) {
      data[key] = data[key].toDate()
    }
  }
  return data
}