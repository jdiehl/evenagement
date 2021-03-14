import Link from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren, useContext } from 'react'

import UserContext from '../../context/UserContext'
import LoginButton from '../molecules/LoginButton'

import UserMenu from './UserMenu'

interface NavBarItemProps {
  href: string
}

function NavBarItem({ children, href }: PropsWithChildren<NavBarItemProps>) {
  const router = useRouter()
  let className = 'px-6 py-3 text-base text-medium hover:text-blue-700 transition-all border-b'
  if (router.pathname === href) {
    className += ' text-blue-600 border-blue-600'
  } else {
    className += '  border-transparent'
  }
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}

export default function MainBar() {
  const user = useContext(UserContext)
  return (
    <nav className="container mx-auto flex items-center">
      <Link href="/">
        <a className="px-6 py-1 text-xl text-thin">Evenagement</a>
      </Link>
      <NavBarItem href="/">Home</NavBarItem>
      <NavBarItem href="/communities">Communities</NavBarItem>
      <div className="flex-grow" />
      {user ? <UserMenu /> : <LoginButton />}
    </nav>
  )
}
