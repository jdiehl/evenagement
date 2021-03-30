import { FormEvent, useState } from 'react'

import { signup } from '../../services/auth'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Toast from '../atoms/Toast'

interface SignUpDialogProps {
  email?: string,
  onBack: () => void
  onSignUp: () => void
}

export default function SignUpDialog({ email: initialEmail, onBack, onSignUp }: SignUpDialogProps) {
  const [email, setEmail] = useState(initialEmail || '')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      await signup(email, password)
    } catch (err) {
      setShowError(true)
      return
    }
    onSignUp()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col space-y-4">
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" minLength={6} label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button tag="input" label="Sign Up" />
        <Button type="outline" onClick={() => onBack()}>Back</Button>
        <Toast show={showError} type="error" onHide={() => setShowError(false)}>
          <p className="font-bold">Email Address in Use</p>
          <p>The provided email address has already signed up for an account.</p>
        </Toast>
      </div>
    </form>
  )
}
