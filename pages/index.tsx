import { UserContextProvider } from '../context/UserContext'
import MainBar from '../components/MainBar'
import MainFooter from '../components/MainFooter'
import Hero from '../components/Hero'
import Teaser from '../components/Teaser'

export default function Home() {
  return (
    <UserContextProvider>
      <MainBar />
      <main>
        <Hero />
        <Teaser />
      </main>
      <MainFooter />
    </UserContextProvider>
  )
}
