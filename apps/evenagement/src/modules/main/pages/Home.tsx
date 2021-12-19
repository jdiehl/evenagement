import Hero from 'ui/Hero'
import HeroDescription from 'ui/HeroDescription'

import Logo from '../Logo'

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
