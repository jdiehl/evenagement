import { PropsWithChildren } from 'react'

interface NavbarProps {
}

export default function Navbar({ children }: PropsWithChildren<NavbarProps>) {
  return (
    <nav className="container mx-auto flex items-center">
      {children}
    </nav>
  )
}
