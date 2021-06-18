import { PropsWithChildren } from 'react'

import MainBar from '@src/components/organisms/MainBar'
import MainFooter from '@src/components/organisms/MainFooter'

export default function EmptyLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col min-h-screen bg-hero-image bg-cover bg-left-bottom">
      <MainBar useTransparentBackground={true} showLogo={false} showMenu={false} />
      <main className="container mx-auto flex flex-col flex-grow text-white">
        {children}
      </main>
      <MainFooter useTransparentBackground={true} />
    </div>
  )
}
