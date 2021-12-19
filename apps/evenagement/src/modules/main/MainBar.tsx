import Container from 'ui/Container'
import Navbar from 'ui/Navbar'
import NavbarBrand from 'ui/NavbarBrand'
import NavbarItem from 'ui/NavbarItem'

import Logo from './Logo'
import UserMenu from './UserMenu'

export default function MainBar() {
  return (
    <Navbar>
      <NavbarBrand href="/">
        <Logo height="1em" fill="#ffffff" />
      </NavbarBrand>
      <NavbarItem href="/communities">Communities</NavbarItem>
      <Container grow />
      <UserMenu />
    </Navbar>
  )
}
