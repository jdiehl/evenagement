import { PropsWithChildren } from 'react'
import { UserContextProvider } from '../context/UserContext'
import MainBar from '../components/MainBar'
import MainFooter from '../components/MainFooter'

export default function Main({ children }: PropsWithChildren<{}>) {
  return (
    <UserContextProvider>
      <MainBar />
      <main>
        {children}
      </main>
      <MainFooter />
    </UserContextProvider>
  )
}
