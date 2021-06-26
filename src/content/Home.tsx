import Hero from '@src/components/Hero'
import HeroDescription from '@src/components/HeroDescription'

export default function Home() {
  return (
    <>
      <Hero />
      <HeroDescription>
        Evenagement is a platform for communities to organize events.
        As a host you can invite and manage your members, create and announce events, track RSVPs and attendance,
        and post summaries of past events including slides and videos.
      </HeroDescription>
    </>
  )
}
