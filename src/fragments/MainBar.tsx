import Container from '@src/components/atoms/Container'
import Navbar from '@src/components/atoms/Navbar'
import NavbarBrand from '@src/components/atoms/NavbarBrand'
import NavbarItem from '@src/components/atoms/NavbarItem'
import Logo from '@src/components/molecules/Logo'
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
