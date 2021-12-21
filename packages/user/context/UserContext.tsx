import { auth as getAuth, isValidUser } from 'firebase-helpers'
import { User, onAuthStateChanged } from 'firebase/auth'
import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react'

interface UserContextProps {
  loading: boolean
  user?: User
}

export const UserContext = createContext<UserContextProps>(null)

export function UserContextProvider({ children }: PropsWithChildren<{}>) {
  const auth = getAuth()
  const [state, setState] = useState<UserContextProps>({ loading: true })

  useEffect(() => {
    return onAuthStateChanged(auth, () => {
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
