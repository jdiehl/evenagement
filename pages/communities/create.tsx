
import CommunityEdit from '../../components/CommunityEdit'
import Main from '../../components/organisms/Main'

export default function Communities() {
  return (
    <Main>
      <CommunityEdit doc={{ name: 'New Community' }} />
    </Main>
  )
}
