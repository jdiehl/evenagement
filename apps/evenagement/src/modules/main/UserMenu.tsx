import { UserCircle } from 'phosphor-react'
import Menu from 'ui/Menu'
import MenuItem from 'ui/MenuItem'

import { signOut } from '@src/lib/firebase'
import SignInButton from '@user/SignInButton'
import { useUser } from '@user/context/UserContext'

export default function UserMenu() {
  const { user } = useUser()

  if (!user) return <SignInButton />

  const userIcon = <UserCircle size={32} weight="fill"/>

  return (
    <Menu trigger={userIcon} right>
      <MenuItem href="/profile" label="My Profile" />
      <MenuItem href="/communities/mine" label="My Communities" />
      <MenuItem onClick={signOut} label="Sign Out" />
    </Menu>
  )

}
