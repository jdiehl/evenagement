import { useState } from 'react'

import LoginWindow from '../LoginWindow/LoginWindow'
import Button from '../atoms/Button'

import Modal from './Modal'

interface SignInButtonProps {
  label?: string
}

export default function SignInButton({ label }: SignInButtonProps) {
  // click handler
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <Button onClick={() => setShowLogin(true)}>{label || 'Sign in'}</Button>
      <Modal show={showLogin} onClose={() => setShowLogin(false)}>
        <LoginWindow />
      </Modal>
    </>
  )
}
