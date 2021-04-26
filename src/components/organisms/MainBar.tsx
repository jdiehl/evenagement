import { useContext } from 'react'

import UserContext from '../../context/UserContext'
import Navbar from '../atoms/Navbar'
import NavbarBrand from '../atoms/NavbarBrand'
import NavbarItem from '../atoms/NavbarItem'
import Logo from '../molecules/Logo'
import SignInButton from '../molecules/SignInButton'

import UserMenu from './UserMenu'

export default function MainBar() {
  const user = useContext(UserContext)
  return (
    <Navbar>
      <NavbarBrand href="/">
        <Logo className="inline-block my-auto mr-1" height="1em" fill="#ffffff" />
      </NavbarBrand>
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/communities">Communities</NavbarItem>
      <div className="flex-grow" />
      {user ? <UserMenu /> : <SignInButton />}
    </Navbar>
  )
}
