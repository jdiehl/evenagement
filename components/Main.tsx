import Container from '@material-ui/core/Container'
import { PropsWithChildren } from 'react'

import MainBar from '../components/MainBar'
import MainFooter from '../components/MainFooter'
import { UserContextProvider } from '../context/UserContext'

export default function Main({ children }: PropsWithChildren<{}>) {
  return (
    <UserContextProvider>
      <MainBar />
      <Container component="main">
        {children}
      </Container>
      <MainFooter />
    </UserContextProvider>
  )
}
