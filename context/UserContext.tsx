import { createContext, useState, useEffect, PropsWithChildren } from 'react'
import firebase from 'firebase'
import { auth } from '../services/auth'

const UserContext = createContext<firebase.User | null>(null)

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState(auth().currentUser)

  useEffect(() => {
    const unsub = auth().onAuthStateChanged(() => setUser(auth().currentUser))
    return () => unsub()
  })

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
