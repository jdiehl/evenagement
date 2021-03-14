import { faApple } from '@fortawesome/free-brands-svg-icons/faApple'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AuthProvider, signInWith } from '../../services/auth'
import Button from '../atoms/Button'

function iconForProvider(provider: AuthProvider) {
  switch (provider) {
    case 'apple': return faApple
    case 'email': return faEnvelope
    case 'facebook': return faFacebook
    case 'google': return faGoogle
    default: throw new Error(`Unknown auth provider: ${provider}`)
  }
}

function signInName(provider: AuthProvider) {
  switch (provider) {
    case 'apple': return 'Sign in with Apple'
    case 'email': return 'Sign in with Email'
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
    <Button tag="button" type="fill" onClick={() => performSignInWith(provider)}>
      <FontAwesomeIcon className="mr-2" icon={iconForProvider(provider)} />
      {signInName(provider)}
    </Button>
  )
}
