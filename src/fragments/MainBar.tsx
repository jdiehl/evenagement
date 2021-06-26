import Container from '@src/components/Container'
import Navbar from '@src/components/Navbar'
import NavbarBrand from '@src/components/NavbarBrand'
import NavbarItem from '@src/components/NavbarItem'
import Logo from '@src/components/Logo'
import UserMenu from '@src/fragments/UserMenu'

export default function MainBar() {
  return (
    <Navbar>
      <NavbarBrand href="/">
        <Logo className="inline-block my-auto mr-1" height="1em" fill="#ffffff" />
      </NavbarBrand>
      <NavbarItem href="/communities">Communities</NavbarItem>
      <Container grow />
      <UserMenu />
    </Navbar>
  )
}
