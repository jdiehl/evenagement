import { UserCircle } from 'phosphor-react'
import { useState } from 'react'

import Menu from '@src/components/atoms/Menu'
import MenuItem from '@src/components/atoms/MenuItem'
import { signout } from '@src/lib/auth'

export default function UserMenu() {
  // state: menu open?
  const [showMenu, setShowMenu] = useState(false)

  return (
    <span className="relative">
      <a className="cursor-pointer text-xl" aria-controls="usermenu" aria-haspopup="true" aria-label="User Menu" onClick={() => setShowMenu(true)}>
        <UserCircle size={32} weight="fill" className="text-white"/>
      </a>
      <Menu show={showMenu} className="right-0" onClose={() => setShowMenu(false)}>
        <MenuItem href="/profile" label="My Profile" />
        <MenuItem href="/communities" label="My Communities" />
        <MenuItem onClick={signout} label="Sign Out" />
      </Menu>
    </span>
  )
}
