import { createContext, useState, PropsWithChildren } from 'react'

import { Text, Toast, ToastType } from '../components'

interface ToastMessage {
  title: string
  message: string
  type?: ToastType
}

type ToastMessageSetter = (message: ToastMessage) => void

export const ToastContext = createContext<ToastMessageSetter>(_ => {})

export function ToastContextProvider({ children }: PropsWithChildren<{}>) {
  const [message, setMessage] = useState<ToastMessage | null>(null)
  const onHide = () => setMessage(null)
  const show = Boolean(message)

  return (
    <ToastContext.Provider value={setMessage}>
      {children}
      <Toast show={show} onHide={onHide} type={message?.type}>{show && <>
        <Text type="h2">{message!.title}</Text>
        <Text>{message!.message}</Text>
      </>}</Toast>
    </ToastContext.Provider>
  )
}
