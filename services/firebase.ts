import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

function initEmulator() {
  firebase.initializeApp({
    apiKey: 'key',
    authDomain: 'domain',
    projectId: 'project',
    storageBucket: 'bucket',
    messagingSenderId: 'sender',
    appId: 'app'
  })

  // Enable firebase emulator
  firebase.auth().useEmulator('http://localhost:9099/')
  firebase.firestore().useEmulator('localhost', 8080)

  // make firebase available globally
  if (typeof window !== 'undefined') {
    (window as any).firebase = firebase
  }
}

function initProduction() {
  firebase.initializeApp({
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
    // make firebase available globally
    if (process.env.NEXT_PUBLIC_DEBUG) (window as any).firebase = firebase

    // start analytics
    firebase.analytics()
  }
}

// Initialize Firebase
export function init() {
  if (firebase.apps.length > 0) return
  if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR || !process.env.NEXT_PUBLIC_FIREBASE_APIKEY) {
    initEmulator()
  } else {
    initProduction()
  }
}
