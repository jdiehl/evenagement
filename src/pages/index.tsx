import Hero from '@src/components/molecules/Hero'
import Main from '@src/components/organisms/Main'

export default function Home() {
  return (
    <Main useBackgroundImage={true}>
      <Hero />
      <p className="text-base my-32 w-9/12 mx-auto">
        Evenagement is a platform for communities to organize events.
        As a host can invite and manage your members, create and announce events, track RSVPs and attendance,
        and post summaries of past events including slides and videos.
      </p>
    </Main>
  )
}
