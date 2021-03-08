import Button from '@material-ui/core/Button'
import AppleIcon from '@material-ui/icons/Apple'
import FacebookIcon from '@material-ui/icons/Facebook'

import { AuthProvider, signInWith } from '../services/auth'

import GoogleIcon from './GoogleIcon'

function iconForProvider(provider: AuthProvider) {
  switch (provider) {
    case 'apple': return <AppleIcon />
    case 'facebook': return <FacebookIcon />
    case 'google': return <GoogleIcon />
    default: throw new Error(`Unknown auth provider: ${provider}`)
  }
}

function signInName(provider: AuthProvider) {
  switch (provider) {
    case 'apple': return 'Sign in with Apple'
    case 'facebook': return 'Sign in with Facebook'
    case 'google': return 'Sign in with Google'
    default: throw new Error(`Unknown auth provider: ${provider}`)
  }
}

interface SignInWithButtonProps {
  provider: AuthProvider
  onError?: (error: Error) => void
  onSuccess?: () => void
}

export default function SignInWithButton({ provider, onError, onSuccess }: SignInWithButtonProps) {
  const performSignInWith = async (authProvider: AuthProvider) => {
    try {
      await signInWith(authProvider)
    } catch (error) {
      onError && onError(error)
      return
    }
    onSuccess()
  }

  return (
    <Button variant="contained" startIcon={iconForProvider(provider)} onClick={() => performSignInWith(provider)}>
      {signInName(provider)}
    </Button>
  )
}
