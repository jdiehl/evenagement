import { useEffect, useState } from 'react'
import { Carousell, Dialog, Modal } from 'ui'

import SignInDialog from './SignInDialog'
import SignUpCompleteDialog from './SignUpCompleteDialog'
import SignUpDialog from './SignUpDialog'

interface SignInModalProps {
  show: boolean
  index?: number
  onClose: () => void
}

export default function SignInModal({ show, onClose, index: initialIndex }: SignInModalProps) {
  const [index, setIndex] = useState(initialIndex || 0)
  const [email, setEmail] = useState('')
  const onSignUp = (email: string) => {
    setEmail(email)
    setIndex(1)
  }

  // reset index if dialog is reopened
  useEffect(() => {
    if (show) setIndex(initialIndex || 0)
  }, [show])

  return (
    <Modal show={show} onClose={onClose}>
      <Dialog>
        <Carousell width={80} index={index}>
          <SignInDialog onSignUp={onSignUp} onClose={onClose} />
          <SignUpDialog email={email} onBack={() => setIndex(0)} onSignUp={() => setIndex(2)} />
          <SignUpCompleteDialog />
        </Carousell>
      </Dialog>
    </Modal>
  )
}
