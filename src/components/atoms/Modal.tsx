import { MouseEventHandler, PropsWithChildren, useRef } from 'react'

interface ModalProps {
  show: boolean
  onClose: () => void
}

export default function Modal({ show, onClose, children }: PropsWithChildren<ModalProps>) {
  if (!show) return null

  // execute onClose only if the background is clicked (not a child)
  const ref = useRef()
  const onClick: MouseEventHandler = event => {
    if (event.target === ref.current) onClose()
  }

  return (
    <div ref={ref} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={onClick}>
      {children}
    </div>
  )
}
