import { Container, Navbar, NavbarBrand, NavbarItem } from 'ui'

import { Logo } from './Logo'
import { UserMenu } from './UserMenu'

export function MainBar() {
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
