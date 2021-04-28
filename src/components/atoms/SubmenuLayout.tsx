import { PropsWithChildren, ReactNode } from 'react'

export default function SubmenuLayout({ children, menuContent }: PropsWithChildren<{ menuContent: ReactNode }>) {
  return (
    <div className="flex-grow flex">
      <div className="flex-grow overflow-hidden p-4">
        {children}
      </div>
      <div className="bg-primary-dark flex-none w-80 self-stretch text-white p-4">
        {menuContent}
      </div>
    </div>
  )
}
