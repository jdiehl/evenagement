import firebase from 'firebase'
import { createContext } from 'react'

import { Data } from '../services/collections'

const EventContext = createContext<firebase.firestore.DocumentSnapshot<Data.Event>>(null)
export default EventContext
