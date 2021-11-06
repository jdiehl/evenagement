import Logo from '@src/components/Logo'
import UserMenu from '@src/fragments/UserMenu'
import Container from '@src/ui/Container'
import Navbar from '@src/ui/Navbar'
import NavbarBrand from '@src/ui/NavbarBrand'
import NavbarItem from '@src/ui/NavbarItem'

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
