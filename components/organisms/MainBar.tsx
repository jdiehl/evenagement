import Link from 'next/link'
import { useContext } from 'react'

import UserContext from '../../context/UserContext'
import NavbarItem from '../atoms/NavbarItem'
import LoginButton from '../molecules/LoginButton'

import UserMenu from './UserMenu'

export default function MainBar() {
  const user = useContext(UserContext)
  return (
    <nav className="container mx-auto flex items-center">
      <Link href="/">
        <a className="px-6 py-1 text-xl font-thin">Evenagement</a>
      </Link>
      <NavbarItem href="/">Home</NavbarItem>
      <NavbarItem href="/communities">Communities</NavbarItem>
      <div className="flex-grow" />
      {user ? <UserMenu /> : <LoginButton />}
    </nav>
  )
}
