import { useContext, useRef, useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import UserContext from '../context/UserContext'
import firebase from '../services/firebase'

export default function UserMenu() {
  const user = useContext(UserContext)

  // reference to element where to place the menu
  const menuRef = useRef(null)

  // state: menu open?
  const [menuOpen, setMenuOpen] = useState(false)

  // open/close the menu
  const openMenu = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  // log out the user
  const onLogoutClick = () => {
    firebase.auth().signOut()
    closeMenu()
  }

  return (
    <>
      <IconButton ref={menuRef} aria-controls="usermenu" aria-haspopup="true" aria-label="User Menu" color="inherit" onClick={openMenu}>
        <AccountCircleIcon />
      </IconButton>
      <Popper open={menuOpen} anchorEl={menuRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'right top' : 'right bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={closeMenu}>
                <List id="usermenu">
                  <ListItem>Hi, {user.displayName}</ListItem>
                  <ListItem button onClick={onLogoutClick}>Sign Out</ListItem>
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
