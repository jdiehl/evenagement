import { PropsWithChildren } from 'react'
import { UserContextProvider } from '../context/UserContext'
import Container from '@material-ui/core/Container'
import MainBar from '../components/MainBar'
import MainFooter from '../components/MainFooter'

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
