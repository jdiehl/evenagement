import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import UserContext from '../context/UserContext'
import LoginButton from './LoginButton'
import UserMenu from './UserMenu'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}))

export default function MainBar() {
  const user = useContext(UserContext)
  const classes = useStyles()
  return (
    <nav>
      <AppBar color="transparent" elevation={0} position="static">
        <Container>
          <Toolbar>
            <Link href="/">
              <Button>Evenagement</Button>
            </Link>
            <div className={classes.grow} />
            {user ? <UserMenu /> : <LoginButton />}
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  )
}
