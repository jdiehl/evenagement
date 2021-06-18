import { PropsWithChildren } from 'react'

import MainBar from '@src/components/organisms/MainBar'
import MainFooter from '@src/components/organisms/MainFooter'

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainBar />
      <main className="container mx-auto flex flex-col flex-grow">
        {children}
      </main>
      <MainFooter />
    </div>
  )
}
