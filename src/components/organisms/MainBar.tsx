import { useContext } from 'react'

import UserContext from '../../context/UserContext'
import Navbar from '../atoms/Navbar'
import NavbarBrand from '../atoms/NavbarBrand'
import NavbarItem from '../atoms/NavbarItem'
import Logo from '../molecules/Logo'
import SignInButton from '../molecules/SignInButton'

import UserMenu from './UserMenu'

interface MainBarProps {
  useTransparentBackground?: boolean
  showMenu?: boolean
  showLogo?: boolean
  showUserMenu?: boolean
}

export default function MainBar({ useTransparentBackground = false, showMenu = true, showLogo = true, showUserMenu = true }: MainBarProps) {
  const user = useContext(UserContext)
  return (
    <Navbar useTransparentBackground={useTransparentBackground}>
      {showLogo
        ? <NavbarBrand href="/">
          <Logo className="inline-block my-auto mr-1" height="1em" fill="#ffffff" />
        </NavbarBrand>
        : null}
      {showMenu
        ? <>
          <NavbarItem href="/communities">Communities</NavbarItem>
        </>
        : null}
      <div className="flex-grow" />
      {showUserMenu ? (user ? <UserMenu /> : <SignInButton />) : null}
    </Navbar>
  )
}
