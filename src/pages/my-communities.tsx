import CommunityGrid from '@src/components/organisms/CommunityGrid'
import Main from '@src/components/organisms/Main'

export default function Communities() {
  return (
    <Main>
      <CommunityGrid filter="mine" />
    </Main>
  )
}
