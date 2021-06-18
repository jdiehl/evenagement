import Hero from '@src/components/atoms/Hero'
import HeroDescription from '@src/components/atoms/HeroDescription'

export default function HomeContent() {
  return (
    <>
      <Hero />
      <HeroDescription>
        Evenagement is a platform for communities to organize events.
        As a host can invite and manage your members, create and announce events, track RSVPs and attendance,
        and post summaries of past events including slides and videos.
      </HeroDescription>
    </>
  )
}
