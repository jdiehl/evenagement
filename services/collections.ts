import firebase from './firebase'

export interface Event {
  title: String
}

export const events = firebase.firestore().collection('events') as firebase.firestore.CollectionReference<Event>
