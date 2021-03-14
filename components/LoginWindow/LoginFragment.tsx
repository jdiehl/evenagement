import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { ChangeEvent, useContext } from 'react'

import { AuthProvider, signin } from '../../services/auth'
import PasswordField from '../PasswordField'
import SignInWithButton from '../molecules/SignInWithButton'

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

  const providers: AuthProvider[] = ['apple', 'facebook', 'google']

  return (
    <Box component="div" className={classes.loginWindowContent}>
      {providers.map(provider => <SignInWithButton key={provider} provider={provider} />)}
      <Typography variant="body2" align="center">
        - or -
      </Typography>
      <TextField inputProps={{ tabIndex: tabIndex() }} variant="outlined" label="Email" value={props.loginData.email} onChange={props.handleChange('email')}></TextField>
      <PasswordField tabIndex={tabIndex()} label="Password" password={props.loginData.password} onChange={props.handleChange('password')} />
      <Button variant="contained" color="primary" onClick={() => signin(props.loginData.email, props.loginData.password)}>
        Login
      </Button>
      <Button size="small" onClick={() => context.setWindowState('signup')}>
        Sign Up With Email
      </Button>
    </Box>
  )
}
