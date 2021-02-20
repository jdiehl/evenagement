import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import UserContext from '../context/UserContext'
import { auth } from '../services/auth'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}))

function LoginButtonsOrUserMenu() {
  const user = useContext(UserContext)
  const { signInAnonymously, signOut } = auth()

  if (!user) {
    return (
    <>
      <Button color="inherit" onClick={() => signInAnonymously()}>Sign up</Button>
      <Button color="inherit" onClick={() => signInAnonymously()}>Login</Button>
    </>
    )
  }

  return (
    <IconButton aria-label="User Menu" color="inherit" onClick={() => signOut()}>
      <AccountCircleIcon />
    </IconButton>
  )
}

export default function MainBar() {
  const classes = useStyles()
  return (
    <nav>
      <AppBar color="transparent" elevation={0} position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Evenagement
            </Typography>
            <LoginButtonsOrUserMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  )
}
