import { PropsWithChildren } from 'react'

interface NavbarProps {
  useTransparentBackground?: boolean
}

export default function Navbar({ children, useTransparentBackground = false }: PropsWithChildren<NavbarProps>) {
  return (
    <div className={useTransparentBackground ? '' : 'bg-primary-dark border-b-2 border-tertiary'}>
      <nav className="container mx-auto h-12 flex px-4 items-center">
        {children}
      </nav>
    </div>
  )
}
