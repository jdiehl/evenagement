import firebase from 'firebase/app'

import storageMock from './storageMock'

export function storage() {
  if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR) {
    return storageMock
  }
  return firebase.storage().ref()
}
