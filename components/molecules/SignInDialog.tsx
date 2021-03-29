import { useState } from 'react'

import { AuthProvider } from '../../services/auth'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Line from '../atoms/Line'

import SignInWithButton from './SignInWithButton'

const providers: AuthProvider[] = ['apple', 'facebook', 'google']

interface SignInDialogProps {
  onSignUp: (email: string) => void
  onClose: () => void
}

export default function SignInDialog({ onSignUp, onClose }: SignInDialogProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    // todo
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
