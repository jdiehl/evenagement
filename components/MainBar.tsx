import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import UserContext from '../context/UserContext'
import LoginButton from './LoginButton'
import UserMenu from './UserMenu'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}))

function LoginButtonsOrUserMenu() {
  const user = useContext(UserContext)
  return user ? <UserMenu /> : <LoginButton />
}

export default function MainBar() {
  const classes = useStyles()
  return (
    <nav>
      <AppBar color="transparent" elevation={0} position="static">
        <Container>
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
