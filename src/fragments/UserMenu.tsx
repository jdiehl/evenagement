import { UserCircle } from 'phosphor-react'

import { useUser } from '@src/context/UserContext'
import SignInButton from '@src/fragments/SignInButton'
import { signOut } from '@src/lib/firebase'
import Menu from '@src/ui/Menu'
import MenuItem from '@src/ui/MenuItem'

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
