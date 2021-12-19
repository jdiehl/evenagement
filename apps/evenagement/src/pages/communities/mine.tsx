import CommunityOverview from '@community/pages/CommunityOverview'
import MainLayoutWithUser from '@main/layouts/MainLayoutWithUser'

export default function CommunitiesMine() {
  return (
    <MainLayoutWithUser>
      <CommunityOverview mine />
    </MainLayoutWithUser>
  )
}
