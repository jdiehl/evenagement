import { FormEvent, useContext, useState } from 'react'

import Button from '@src/components/atoms/Button'
import Input from '@src/components/atoms/Input'
import Line from '@src/components/atoms/Line'
import SignInWithButton from '@src/components/molecules/SignInWithButton'
import ToastContext from '@src/context/ToastContext'
import { AuthProvider, signIn } from '@src/lib/firebase'

const providers: AuthProvider[] = ['apple', 'facebook', 'google']

interface SignInDialogProps {
  onSignUp: (email: string) => void
  onClose: () => void
}

export default function SignInDialog({ onSignUp, onClose }: SignInDialogProps) {
  const setToast = useContext(ToastContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // sign in via email
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signIn(email, password)
    } catch (err) {
      setToast({ title: 'Cannot sign in', message: 'Please verify that you have entered the correct email and password.', type: 'error' })
      return
    }
    onClose()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col space-y-4">
        {providers.map(provider => <SignInWithButton key={provider} provider={provider} onSuccess={onClose}/>)}
        <Line label="or" />
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button tag="input" label="Sign In" />
        <Button type="outline" onClick={() => onSignUp(email)}>Sign Up With Email</Button>
      </div>
    </form>
  )
}
