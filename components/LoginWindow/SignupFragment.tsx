import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { ChangeEvent, useContext, useState } from 'react'

import { signup } from '../../services/auth'
import PasswordField from '../PasswordField'

import LoginWindowContext from './LoginWindowContext'
import useStyles from './LoginWindowStyles'

interface SignupFragmentProps {
  signupData: {username: string, email: string, password: string}
  handleSignupChange: (prop: string) => (ev: ChangeEvent<any>) => void
}

export default function SignupFragment(props: SignupFragmentProps) {
  const classes = useStyles()
  const context = useContext(LoginWindowContext)
  const [errorMessage, setErrorMessage] = useState('')

  const tabIndex = () => {
    return context.windowState === 'signup' ? 0 : -1
  }

  const handleSignup = async () => {
    try {
      const user = await signup(props.signupData.email, props.signupData.password)
      if (!user.emailVerified) {
        context.setWindowState('emailVerification')
      }
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  return (
    <Box component="div" className={classes.loginWindowContent}>
      <Box component="div">
        <IconButton aria-label="back" onClick={() => context.setWindowState('login')}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Typography variant="body1" align="center">
        Welcome on board
      </Typography>
      <TextField required inputProps={{ tabIndex: tabIndex() }} variant="outlined" label="Username" value={props.signupData.username} onChange={props.handleSignupChange('username')}></TextField>
      <TextField required inputProps={{ tabIndex: tabIndex() }} variant="outlined" label="Email" value={props.signupData.email} onChange={props.handleSignupChange('email')}></TextField>
      <PasswordField tabIndex={tabIndex()} label="Password" password={props.signupData.password} onChange={props.handleSignupChange('password')} />
      <Typography variant='subtitle1' color='error'>{errorMessage}</Typography>
      <Button variant="contained" color="primary" onClick={handleSignup}>
        Sign Up
      </Button>
    </Box>
  )
}
