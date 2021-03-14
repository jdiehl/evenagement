import { PropsWithChildren } from 'react'

interface ModalProps {
  show: boolean
  onClose: () => void
}

export default function Modal({ show, onClose, children }: PropsWithChildren<ModalProps>) {
  if (!show) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen">
      <div className="absolute inset-0" onClick={onClose}></div>
      {children}
    </div>
  )
}
