import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import LoginWindow from './LoginWindow'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}))

export default function MainBar() {
  const classes = useStyles()

  const [loginOpen, setLoginOpen] = useState(false)

  return <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit" onClick={() => setLoginOpen(true)}>Login</Button>
    <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
      <LoginWindow />
    </Modal>
  </Toolbar>
</AppBar>
}
