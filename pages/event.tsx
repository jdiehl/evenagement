import { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Event from '../components/Event'
import MainFooter from '../components/MainFooter'
import EventContext from '../context/EventContext'
import firebase from '../services/firebase'

export default function EventPage() {
  const [event, setEvent] = useState(null)

  useEffect(() => {
    const ref = firebase.firestore().collection('events').doc('Z402pb7OQiBcXLEwDvoV')
    const unsub = ref.onSnapshot(doc => setEvent(doc))
    return () => unsub()
  })

  return <EventContext.Provider value={event}>
    {event ? <Event /> : <p>Loading...</p>}
    <MainFooter />
  </EventContext.Provider>
}
