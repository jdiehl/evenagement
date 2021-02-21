import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
}

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(config)

  // Only run this in the browser
  if (typeof window !== 'undefined') {
    // make firebase available globally
    (window as any).firebase = firebase

    // start analytics
    firebase.analytics()
  }
}

export default firebase

export function collection<T>(name: string) {
  return firebase.firestore().collection(name) as firebase.firestore.CollectionReference<T>
}
