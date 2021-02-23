import Button from '@material-ui/core/Button'
import AppleIcon from '@material-ui/icons/Apple'
import FacebookIcon from '@material-ui/icons/Facebook'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { ChangeEvent, forwardRef, useState } from 'react'
import PasswordField from './PasswordField'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { signup } from '../services/auth'

const useStyles = makeStyles((theme) => ({
  loginWindow: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    'border-radius': '15px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 0, 1),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden'
  },
  loginWindowContentWrapper: {
    display: 'flex',
    'flex-direction': 'row',
    transition: '.5s ease-in-out'
  },
  signup: {
    transform: 'translateX(-400px)'
  },
  emailVerification: {
    transform: 'translateX(-800px)'
  },
  login: {
    transform: 'translateX(0)'
  },
  loginWindowContent: {
    width: '100%',
    display: 'flex',
    padding: theme.spacing(0, 4, 0),
    flex: 'none',
    'flex-direction': 'column',
    'align-content': 'center',
    '& > *': {
      margin: theme.spacing(0, 0, 2)
    }
  }
}))

type LoginWindowState = 'login' | 'signup' | 'emailVerification'

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

  const handleSignup = async () => {
    const user = await signup(signupData.email, signupData.password)
    if (!user.emailVerified) {
      setWindowState('emailVerification')
      await user.sendEmailVerification()
    }
  }

  const tabIndexForState = (state: LoginWindowState) => {
    return windowState === state ? 0 : -1
  }

  return <Box className={classes.loginWindow}>
    <Box className={classes.loginWindowContentWrapper + ' ' + classes[windowState]}>
      <Box component="div" className={classes.loginWindowContent}>
        <Button variant="contained" startIcon={<AppleIcon />}>
          Sign in with Apple
        </Button>
        <Button variant="contained" startIcon={<FacebookIcon />}>
          Sign in with Facebook
        </Button>
        <Typography variant="body2" align="center">
          - or -
        </Typography>
        <TextField inputProps={{ tabIndex: tabIndexForState('login') }} variant="outlined" label="Email" value={loginData.email} onChange={handleChange('email')}></TextField>
        <PasswordField tabIndex={tabIndexForState('login')} label="Password" password={loginData.password} onChange={handleChange('password')} />
        <Button variant="contained" color="primary">
          Login
        </Button>
        <Button size="small" onClick={() => setWindowState('signup')}>
          Sign Up With Email
        </Button>
      </Box>
      <Box component="div" className={classes.loginWindowContent}>
        <Box component="div">
          <IconButton aria-label="back" onClick={() => setWindowState('login')}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Typography variant="body1" align="center">
          Welcome on board
        </Typography>
        <TextField required inputProps={{ tabIndex: tabIndexForState('signup') }} variant="outlined" label="Username" value={signupData.username} onChange={handleSignupChange('username')}></TextField>
        <TextField required inputProps={{ tabIndex: tabIndexForState('signup') }} variant="outlined" label="Email" value={signupData.email} onChange={handleSignupChange('email')}></TextField>
        <PasswordField tabIndex={tabIndexForState('signup')} label="Password" password={signupData.password} onChange={handleSignupChange('password')} />
        <Button variant="contained" color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Box>
    </Box>
  </Box>
})

export default LoginWindow
