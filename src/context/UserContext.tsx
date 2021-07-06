import firebase from 'firebase/app'
import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'

import { isValidUser } from '@src/lib/firebase'

interface UserContextProps {
  loading: boolean
  user?: firebase.User
}

export const UserContext = createContext<UserContextProps>(null)

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
  const auth = firebase.auth()
  const [state, setState] = useState<UserContextProps>({ loading: true })

  useEffect(() => {
    return auth.onAuthStateChanged(() => {
      const user = isValidUser(auth.currentUser) && auth.currentUser
      setState({ loading: false, user })
    })
  }, [])

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
