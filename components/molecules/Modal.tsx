import { PropsWithChildren } from 'react'

interface ModalProps {
  show: boolean
  onHide: () => void
}

export default function Modal({ show, onHide, children }: PropsWithChildren<ModalProps>) {
  if (!show) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center h-screen">
      {children}
    </div>
  )
}
