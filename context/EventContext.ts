import { createContext } from 'react'

import { Data } from '../services/collections'
import firebase from '../services/firebase'

const EventContext = createContext<firebase.firestore.DocumentSnapshot<Data.Event>>(null)
export default EventContext
