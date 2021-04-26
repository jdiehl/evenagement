import { PropsWithChildren } from 'react'

import { UserContextProvider } from '../../context/UserContext'

import MainBar, { IMainBarProps } from './MainBar'
import MainFooter from './MainFooter'

export default function Main({ children, useBackgroundImage = false }: PropsWithChildren<{ useBackgroundImage?: boolean }>) {
  const mainBarProps:IMainBarProps = useBackgroundImage
    ? {
        useTransparentBackground: true,
        showLogo: false,
        showMenu: false
      }
    : {}

  return (
    <UserContextProvider>
      <div className={'flex flex-col min-h-screen ' + (useBackgroundImage ? 'bg-hero-image bg-cover bg-left-bottom' : '')}>
        <MainBar {...mainBarProps} />
        <main className={'container mx-auto flex-grow ' + (useBackgroundImage ? 'text-white' : '')}>
          {children}
        </main>
        <MainFooter useTransparentBackground={useBackgroundImage} />
      </div>
    </UserContextProvider>
  )
}
