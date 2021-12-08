import { PropsWithChildren } from 'react'

export default function Dialog({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-white text-black rounded shadow p-4">
      {children}
    </div>
  )
}
