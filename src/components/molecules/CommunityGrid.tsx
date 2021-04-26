import { PropsWithChildren } from 'react'

export default function CommunityGrid({ children }: PropsWithChildren<{}>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
      {children}
    </div>
  )
}
