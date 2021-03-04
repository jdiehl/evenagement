import { ChangeEvent, forwardRef, useState } from 'react'
import Box from '@material-ui/core/Box'
import useStyles from './LoginWindowStyles'
import LoginFragment from './LoginFragment'
import SignupFragment from './SignupFragment'
import EmailVerificationFragment from './EmailVerificationFragment'
import LoginWindowContext, { LoginWindowState } from './LoginWindowContext'

const LoginWindow = forwardRef(() => {
  const classes = useStyles()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    username: ''
  })

  const [windowState, setWindowState] = useState<LoginWindowState>('login')

  const handleChange = (prop: string) => (ev: ChangeEvent<any>) => {
    setLoginData({ ...loginData, [prop]: ev.target.value })
  }

  const handleSignupChange = (prop: string) => (ev: ChangeEvent<any>) => {
    setSignupData({ ...signupData, [prop]: ev.target.value })
  }

  return <Box className={classes.loginWindow}>
    <Box className={classes.loginWindowContentWrapper + ' ' + classes[windowState]}>
      <LoginWindowContext.Provider value={{ windowState, setWindowState }}>
        <LoginFragment loginData={loginData} handleChange={handleChange} />
        <SignupFragment signupData={signupData} handleSignupChange={handleSignupChange} />
        <EmailVerificationFragment />
      </LoginWindowContext.Provider>
    </Box>
  </Box>
})

export default LoginWindow
