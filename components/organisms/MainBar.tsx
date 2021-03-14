import { useContext } from 'react'

import UserContext from '../../context/UserContext'
import Navbar from '../atoms/Navbar'
import NavbarBrand from '../atoms/NavbarBrand'
import NavbarItem from '../atoms/NavbarItem'
import LoginButton from '../molecules/LoginButton'

import UserMenu from './UserMenu'

export default function MainBar() {
  const user = useContext(UserContext)
  return (
    <Navbar>
      <NavbarBrand href="/">Evenagement</NavbarBrand>
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/communities">Communities</NavbarItem>
      <div className="flex-grow" />
      {user ? <UserMenu /> : <LoginButton />}
    </Navbar>
  )
}
