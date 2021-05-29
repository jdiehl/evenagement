import MainBar from '@src/components/organisms/MainBar'
import MainFooter from '@src/components/organisms/MainFooter'
import { ToastContextProvider } from '@src/context/ToastContext'
import { UserContextProvider } from '@src/context/UserContext'
import { PropsWithChildren } from 'react'

export default function Main({ children, useBackgroundImage = false }: PropsWithChildren<{ useBackgroundImage?: boolean }>) {
  const mainBarProps = useBackgroundImage
    ? {
        useTransparentBackground: true,
        showLogo: false,
        showMenu: false
      }
    : {}

  return (
    <ToastContextProvider>
      <UserContextProvider>
        <div className={'flex flex-col min-h-screen ' + (useBackgroundImage ? 'bg-hero-image bg-cover bg-left-bottom' : '')}>
          <MainBar {...mainBarProps} />
          <main className={'container mx-auto flex flex-col flex-grow ' + (useBackgroundImage ? 'text-white' : '')}>
            {children}
          </main>
          <MainFooter useTransparentBackground={useBackgroundImage} />
        </div>
      </UserContextProvider>
    </ToastContextProvider>
  )
}
