import MainBar from '../components/MainBar'
import MainFooter from '../components/MainFooter'
import Hero from '../components/Hero'
import Teaser from '../components/Teaser'

export default function Home() {
  return (
    <>
      <MainBar />
      <main>
        <Hero />
        <Teaser />
      </main>
      <MainFooter />
    </>
  )
}
