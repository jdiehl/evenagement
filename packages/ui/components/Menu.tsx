import { PropsWithChildren, ReactNode, useEffect, useState } from 'react'

interface MenuProps {
  trigger: ReactNode
  right?: boolean
}

export function Menu({ trigger, right, children }: PropsWithChildren<MenuProps>) {
  const [show, setShow] = useState(false)

  // close handler for clicking outside the menu
  const onClose = () => setShow(false)

  // trigger on close on mouse click
  useEffect(() => {
    if (!show) return
    setTimeout(() => document.addEventListener('click', onClose))
    return () => document.removeEventListener('click', onClose)
  }, [show])

  // menu factory
  const makeMenu = () => {
    if (!show) return null
    const className = 'absolute overflow-hidden rounded shadow bg-white text-black z-20' + (right ? ' right-0' : '')
    return (
      <div className={className} role="menu" aria-orientation="vertical">
        {children}
      </div>
    )
  }

  return (
    <span className="relative">
      <a className="cursor-pointer text-xl" aria-controls="usermenu" aria-haspopup="true" aria-label="User Menu" onClick={() => setShow(true)}>
        {trigger}
      </a>
      {makeMenu()}
    </span>
  )
}
