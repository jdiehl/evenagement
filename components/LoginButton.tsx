import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import LoginWindow from './LoginWindow/LoginWindow'

export default function LoginButton() {
  // click handler
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <Box>
      <Button color="inherit" onClick={() => setLoginOpen(true)}>Sign in</Button>
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <LoginWindow />
      </Modal>
    </Box>
  )
}
