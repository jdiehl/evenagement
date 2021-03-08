import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AppleIcon from '@material-ui/icons/Apple'
import FacebookIcon from '@material-ui/icons/Facebook'
import { ChangeEvent, useContext } from 'react'

import { AuthProvider, signInWith } from '../../services/auth'
import PasswordField from '../PasswordField'

import GoogleIcon from './GoogleIcon'
import LoginWindowContext from './LoginWindowContext'
import useStyles from './LoginWindowStyles'

interface LoginFragmentProps {
  loginData: {email: string, password: string}
  handleChange: (prop: string) => (ev: ChangeEvent<any>) => void
}

export default function LoginFragment(props: LoginFragmentProps) {
  const classes = useStyles()
  const context = useContext(LoginWindowContext)

  const tabIndex = () => {
    return context.windowState === 'login' ? 0 : -1
  }

  const performSignInWith = async (authProvider: AuthProvider) => {
    try {
      await signInWith(authProvider)
    } catch (error) {
      // TODO: Handle the error
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  return (
    <Box component="div" className={classes.loginWindowContent}>
      <Button variant="contained" startIcon={<AppleIcon />} onClick={() => performSignInWith('apple')}>
        Sign in with Apple
      </Button>
      <Button variant="contained" startIcon={<FacebookIcon />} onClick={() => performSignInWith('facebook')}>
        Sign in with Facebook
      </Button>
      <Button variant="contained" startIcon={<GoogleIcon />} onClick={() => performSignInWith('google')}>
        Sign in with Google
      </Button>
      <Typography variant="body2" align="center">
        - or -
      </Typography>
      <TextField inputProps={{ tabIndex: tabIndex() }} variant="outlined" label="Email" value={props.loginData.email} onChange={props.handleChange('email')}></TextField>
      <PasswordField tabIndex={tabIndex()} label="Password" password={props.loginData.password} onChange={props.handleChange('password')} />
      <Button variant="contained" color="primary">
        Login
      </Button>
      <Button size="small" onClick={() => context.setWindowState('signup')}>
        Sign Up With Email
      </Button>
    </Box>
  )
}
