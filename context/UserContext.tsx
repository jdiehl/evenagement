import firebase from 'firebase'
import { createContext, useState, useEffect, PropsWithChildren } from 'react'

import { auth, isValidUser } from '../services/auth'

const UserContext = createContext<firebase.User | null>(null)

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState(auth().currentUser)

  useEffect(() => {
    const unsub = auth().onAuthStateChanged(() => {
      let user = auth().currentUser

      // if the user is not valid set it to undefined
      if (!isValidUser(user)) user = undefined

      // store the user in the context
      setUser(user)
    })
    return () => unsub()
  })

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
