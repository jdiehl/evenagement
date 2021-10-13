import { getAnalytics } from 'firebase/analytics'
import { getApps, initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import 'firebase/storage'

function initEmulator() {
  initializeApp({
    apiKey: 'key',
    authDomain: 'domain',
    projectId: 'evenagement',
    storageBucket: 'bucket',
    messagingSenderId: 'sender',
    appId: 'app'
  })

  // Enable firebase emulator
  connectAuthEmulator(getAuth(), 'http://localhost:9099/')
  connectFirestoreEmulator(getFirestore(), 'localhost', 8080)
}

function initProduction() {
  initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
  })

  // Only run this in the browser
  if (typeof window !== 'undefined') {

    if (process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID) getAnalytics()
  }
}

// Initialize Firebase
export function initFirebase() {
  if (getApps().length > 0) return
  if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR || !process.env.NEXT_PUBLIC_FIREBASE_APIKEY) {
    initEmulator()
  } else {
    initProduction()
  }
}
