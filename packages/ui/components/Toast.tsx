import { PropsWithChildren, useEffect } from 'react'

export type ToastType = 'info' | 'warning' | 'error'
interface ToastProps {
  show: boolean
  type?: ToastType
  onHide: () => void
}

function colorForType(type: ToastType): string {
  switch (type) {
    case 'info': return 'bg-primary-light border-primary'
    case 'warning': return 'bg-warning-light border-warning'
    case 'error': return 'bg-error-light border-error'
  }
}

export function Toast({ show, type, onHide, children }: PropsWithChildren<ToastProps>) {
  useEffect(() => {
    if (show) {
      const id = setTimeout(() => onHide(), 3000)
      return () => clearTimeout(id)
    }
  }, [show])

  if (!show) return null

  const className = colorForType(type || 'info') + ' border-l-4 text-white rounded shadow p-4 text-base max-w-prose'
  return (
    <div className="z-20 fixed top-2 left-2 right-2 flex justify-center">
      <div className={className} role="alert">
        {children}
      </div>
    </div>
  )
}
