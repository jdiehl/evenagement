import { AuthProvider, signInWith } from 'firebase-helpers'
import { AppleLogo, FacebookLogo, GoogleLogo, Envelope, IconProps } from 'phosphor-react'
import { Button } from 'ui'

function makeIconForProvider(provider: AuthProvider, props: IconProps = {}) {
  props.className = 'mr-2 inline-block'
  props.size = 20
  switch (provider) {
    case 'apple': return <AppleLogo weight="fill" {...props} />
    case 'email': return <Envelope {...props} />
    case 'facebook': return <FacebookLogo weight="fill" {...props} />
    case 'google': return <GoogleLogo weight="bold" {...props} />
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

export function SignInWithButton({ provider, onError, onSuccess }: SignInWithButtonProps) {
  const performSignInWith = async (authProvider: AuthProvider) => {
    try {
      await signInWith(authProvider)
    } catch (error) {
      onError && onError(error as any)
      return
    }
    onSuccess && onSuccess()
  }

  const icon = makeIconForProvider(provider)

  return (
    <Button type="fill" onClick={() => performSignInWith(provider)}>
      {icon}
      {signInName(provider)}
    </Button>
  )
}
