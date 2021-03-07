import firebase from 'firebase'
import { createContext, useState, useEffect, PropsWithChildren } from 'react'

import { auth } from '../services/auth'

const UserContext = createContext<firebase.User | null>(null)

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState(auth().currentUser)

  useEffect(() => {
    const unsub = auth().onAuthStateChanged(() => {
      const user = auth().currentUser
      if (user &&
        (user.providerData[0].providerId === firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) &&
        (!user.emailVerified)) {
        return
      }
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
