import { useState } from 'react'
import { Button } from 'ui'

import { SignInModal } from './SignInModal'

interface SignInButtonProps {
  label?: string
}

export function SignInButton({ label }: SignInButtonProps) {
  // click handler
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Button onClick={() => setShowLogin(true)}>{label || 'Sign in'}</Button>
      <SignInModal show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}
