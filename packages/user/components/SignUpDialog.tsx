import { signUp } from 'firebase-helpers'
import { FormEvent, useContext, useState } from 'react'
import { Button, Container, Input, ToastContext } from 'ui'

interface SignUpDialogProps {
  email?: string,
  onBack: () => void
  onSignUp: () => void
}

export function SignUpDialog({ email: initialEmail, onBack, onSignUp }: SignUpDialogProps) {
  const setToast = useContext(ToastContext)

  const [email, setEmail] = useState(initialEmail || '')
  const [password, setPassword] = useState('')

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      await signUp(email, password)
    } catch (err) {
      setToast({ title: 'Email Address in Use', message: 'The provided email address has already signed up for an account.', type: 'error' })
      return
    }
    onSignUp()
  }

  return (
    <form onSubmit={onSubmit}>
      <Container gap>
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" minLength={6} label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button tag="input" label="Sign Up" />
        <Button type="outline" onClick={() => onBack()}>Back</Button>
      </Container>
    </form>
  )
}
