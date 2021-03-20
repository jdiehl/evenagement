import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import { signout } from '../../services/auth'
import Menu from '../atoms/Menu'
import MenuItem from '../atoms/MenuItem'

export default function UserMenu() {
  // state: menu open?
  const [showMenu, setShowMenu] = useState(false)

  return (
    <span className="relative">
      <a className="cursor-pointer text-xl" aria-controls="usermenu" aria-haspopup="true" aria-label="User Menu" onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={faUserCircle} />
      </a>
      {showMenu && (
        <Menu className="right-0" onClose={() => setShowMenu(false)}>
          <MenuItem href="/profile" label="My Profile" />
          <MenuItem href="/communities" label="My Communities" />
          <MenuItem onClick={signout} label="Sign Out" />
        </Menu>
      )}
    </span>
  )
}
