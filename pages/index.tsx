import Hero from '../components/molecules/Hero'
import Main from '../components/organisms/Main'

export default function Home() {
  return (
    <Main>
      <Hero />
      <p className="text-base">
        Evenagement is a platform for communities to organize events.
        As a host can invite and manage your members, create and announce events, track RSVPs and attendance,
        and post summaries of past events including slides and videos.
      </p>
    </Main>
  )
}
