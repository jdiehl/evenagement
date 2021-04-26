import { PropsWithChildren } from 'react'

interface NavbarProps {
}

export default function Navbar({ children }: PropsWithChildren<NavbarProps>) {
  return (
    <div className="bg-primary-dark border-b-2 border-tertiary">
      <nav className="container mx-auto flex px-4 items-center">
        {children}
      </nav>
    </div>
  )
}
