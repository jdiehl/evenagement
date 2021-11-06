import Logo from '@src/components/Logo'
import Hero from '@src/ui/Hero'
import HeroDescription from '@src/ui/HeroDescription'

export default function Home() {
  return (
    <>
      <Hero logo={<Logo fill="#ffffff" />}/>
      <HeroDescription>
        Evenagement is a platform for communities to organize events.
        As a host you can invite and manage your members, create and announce events, track RSVPs and attendance,
        and post summaries of past events including slides and videos.
      </HeroDescription>
    </>
  )
}
