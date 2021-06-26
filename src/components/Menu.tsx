import { PropsWithChildren, useEffect } from 'react'

interface MenuProps {
  show: boolean
  className?: string
  onClose: () => void
}

export default function Menu({ className, show, onClose, children }: PropsWithChildren<MenuProps>) {
  // trigger on close on mouse click
  useEffect(() => {
    if (!show) return
    document.addEventListener('click', onClose)
    return () => document.removeEventListener('click', onClose)
  }, [show])

  if (!show) return null

  let classes = 'absolute overflow-hidden rounded shadow bg-white text-black z-20'
  if (className) classes += ' ' + className

  return (
    <div className={classes} role="menu" aria-orientation="vertical">
      {children}
    </div>
  )
}
