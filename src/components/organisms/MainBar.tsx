import { useContext } from 'react'

import Navbar from '@src/components/atoms/Navbar'
import NavbarBrand from '@src/components/atoms/NavbarBrand'
import NavbarItem from '@src/components/atoms/NavbarItem'
import Logo from '@src/components/molecules/Logo'
import SignInButton from '@src/components/molecules/SignInButton'
import UserMenu from '@src/components/organisms/UserMenu'
import UserContext from '@src/context/UserContext'

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
