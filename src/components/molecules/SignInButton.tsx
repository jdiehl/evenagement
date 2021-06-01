import { useState } from 'react'

import Button from '@src/components/atoms/Button'
import SignInModal from '@src/components/molecules/SignInModal'

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
