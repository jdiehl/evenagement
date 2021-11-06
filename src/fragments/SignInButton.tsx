import { useState } from 'react'

import SignInModal from '@src/components/SignInModal'
import Button from '@src/ui/Button'

interface SignInButtonProps {
  label?: string
}

export default function SignInButton({ label }: SignInButtonProps) {
  // click handler
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Button onClick={() => setShowLogin(true)}>{label || 'Sign in'}</Button>
      <SignInModal show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}
