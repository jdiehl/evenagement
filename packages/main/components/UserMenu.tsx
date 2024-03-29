import { signOut } from 'firebase-helpers'
import { UserCircle } from 'phosphor-react'
import { Menu, MenuItem } from 'ui'
import { SignInButton, useUser } from 'user'

export function UserMenu() {
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
