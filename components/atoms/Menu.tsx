import { PropsWithChildren, useEffect } from 'react'

interface MenuProps {
  className?: string
  onClose: () => void
}

export default function Menu({ className, children, onClose }: PropsWithChildren<MenuProps>) {
  // trigger on close on mouse click
  useEffect(() => {
    document.addEventListener('click', onClose)
    return () => document.removeEventListener('click', onClose)
  }, [])

  let classes = 'absolute overflow-hidden rounded shadow bg-white '
  if (className) classes += ' ' + className

  return (
    <div className={classes} role="menu" aria-orientation="vertical">
      {children}
    </div>
  )
}
