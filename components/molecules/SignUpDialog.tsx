import { useState } from 'react'

import Button from '../atoms/Button'
import Input from '../atoms/Input'

interface SignUpDialogProps {
  email?: string,
  onBack: () => void
}

export default function SignUpDialog(props: SignUpDialogProps) {
  const [email, setEmail] = useState(props.email || '')
  const [password, setPassword] = useState('')

  function onSubmit() {
    // todo
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col space-y-4">
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button tag="input" label="Sign Up" />
        <Button type="outline" onClick={() => props.onBack()}>Back</Button>
      </div>
    </form>
  )
}
