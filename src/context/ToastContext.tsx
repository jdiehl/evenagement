import { createContext, useState, PropsWithChildren } from 'react'

import Toast, { ToastType } from '../components/atoms/Toast'

interface ToastMessage {
  title: string
  message: string
  type?: ToastType
}

type ToastMessageSetter = (message: ToastMessage) => void

const ToastContext = createContext<ToastMessageSetter>(_ => {})

export function ToastContextProvider({ children }: PropsWithChildren<{}>) {
  const [message, setMessage] = useState<ToastMessage | null>(null)
  const onHide = () => setMessage(null)
  const show = Boolean(message)

  return (
    <ToastContext.Provider value={setMessage}>
      {children}
      <Toast show={show} onHide={onHide} type={message?.type}>{show && <>
        <p className="font-bold">{message.title}</p>
        <p>{message.message}</p>
      </>}</Toast>
    </ToastContext.Provider>
  )
}

export default ToastContext
