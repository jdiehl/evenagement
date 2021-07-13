import { UserCircle } from 'phosphor-react'

import Menu from '@src/components/Menu'
import MenuItem from '@src/components/MenuItem'
import { useUser } from '@src/context/UserContext'
import SignInButton from '@src/fragments/SignInButton'
import { signOut } from '@src/lib/firebase'

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
