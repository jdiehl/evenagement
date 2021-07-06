import { MouseEventHandler, PropsWithChildren, useRef } from 'react'

interface ModalProps {
  show: boolean
  onClose: () => void
}

export default function Modal({ show, onClose, children }: PropsWithChildren<ModalProps>) {

  // execute onClose only if the background is clicked (not a child)
  const ref = useRef()
  const onClick: MouseEventHandler = event => {
    if (event.target === ref.current) onClose()
  }

  if (!show) return null
  return (
    <div ref={ref} className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={onClick}>
      {children}
    </div>
  )
}
