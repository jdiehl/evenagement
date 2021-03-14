import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { signout } from '../../services/auth'

export default function UserMenu() {
  // reference to element where to place the menu
  const toggleRef = useRef<HTMLAnchorElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // state: menu open?
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (!showMenu) return
    const listener = (e: MouseEvent) => {
      // for (let element = e.target as any; element; element = element.parentElement) {
      //   if (element === menuRef.current) return
      // }
      setShowMenu(false)
    }
    document.addEventListener('click', listener)
    return () => document.removeEventListener('click', listener)
  }, [showMenu])

  const style: any = {}
  if (toggleRef.current) {
    const rect = toggleRef.current.getBoundingClientRect()
    style.top = rect.bottom
    style.right = window.innerWidth - rect.right
  }

  const menu = (
    <div ref={menuRef} style={style} className="absolute overflow-hidden mt-1 w-56 rounded shadow bg-white" role="menu" aria-orientation="vertical" aria-labelledby="usermenu">
      <Link href="/profile">
        <a className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem">My Profile</a>
      </Link>
      <Link href="/communities">
        <a onClick={() => setShowMenu(false)} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem">My Communities</a>
      </Link>
      <a onClick={() => signout()} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem">Sign Out</a>
    </div>
  )

  return (
    <>
      <a className="cursor-pointer text-xl" ref={toggleRef} aria-controls="usermenu" aria-haspopup="true" aria-label="User Menu" onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={faUserCircle} />
      </a>
      {showMenu && menu}
    </>
  )
}
