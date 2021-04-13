import { PropsWithChildren } from 'react'

import { UserContextProvider } from '../../context/UserContext'

import MainBar from './MainBar'
import MainFooter from './MainFooter'

export default function Main({ children }: PropsWithChildren<{}>) {
  return (
    <UserContextProvider>
      <MainBar />
      <main className="container mx-auto">
        {children}
      </main>
      <MainFooter />
    </UserContextProvider>
  )
}
