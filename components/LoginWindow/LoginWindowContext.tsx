import { createContext } from 'react'

export type LoginWindowState = 'login' | 'signup' | 'emailVerification'

interface LoginWindowContextContent {
  windowState?: LoginWindowState
  setWindowState?: (newState: LoginWindowState) => void
}

const LoginWindowContext = createContext<LoginWindowContextContent>({})

export default LoginWindowContext
