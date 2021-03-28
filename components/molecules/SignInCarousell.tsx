import { useState } from 'react'

import Carousell from '../atoms/Carousell'

import SignInDialog from './SignInDialog'
import SignUpDialog from './SignUpDialog'

interface SignInCarousellProps {
  className?: string
  index?: number
}

export default function SignInCarousell(props: SignInCarousellProps) {
  const [index, setIndex] = useState(props.index || 0)
  const [email, setEmail] = useState('')
  const onSignUp = (email: string) => {
    setEmail(email)
    setIndex(1)
  }
  return (
    <Carousell className={props.className} index={index}>
      <SignInDialog onSignUp={onSignUp} />
      <SignUpDialog email={email} onBack={() => setIndex(0)} />
      {/* <ConfirmSignUpDialog /> */}
    </Carousell>
  )
}
