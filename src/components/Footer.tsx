import { PropsWithChildren } from 'react'

interface FooterProps {
  dark?: boolean
}

export default function Footer({ children, dark }: PropsWithChildren<FooterProps>) {
  return (
    <div className={'py-12 ' + (dark ? 'bg-background-shaded' : 'bg-background-dark')}>
      <footer className="container flex items-center mx-auto">
        <div className={'grid grid-cols-3 gap-4 text-sm w-1/2 mx-auto text-center ' + (dark ? 'text-white hover:text-gray-100' : 'text-primary hover:text-primary-dark')}>
          {children}
        </div>
      </footer>
    </div>
  )
}
