import CommunityOverview from '@src/content/CommunityOverview'
import MainLayoutWithUser from '@src/layouts/MainLayoutWithUser'

export default function CommunitiesMine() {
  return (
    <MainLayoutWithUser>
      <CommunityOverview mine />
    </MainLayoutWithUser>
  )
}
