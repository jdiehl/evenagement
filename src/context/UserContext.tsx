import firebase from 'firebase/app'
import { createContext, useState, useEffect, PropsWithChildren } from 'react'

import { isValidUser } from '../lib/auth'

const UserContext = createContext<firebase.User | null>(null)

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState(firebase.auth().currentUser)

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(() => {
      let user = firebase.auth().currentUser

      // if the user is not valid set it to undefined
      if (!isValidUser(user)) user = undefined

      // store the user in the context
      setUser(user)
    })
    return () => unsub()
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
