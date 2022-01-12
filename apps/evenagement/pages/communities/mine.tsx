import { CommunityOverview } from 'community'
import { MainLayoutWithUser } from 'main'

export default function CommunitiesMine() {
  return (
    <MainLayoutWithUser>
      <CommunityOverview mine />
    </MainLayoutWithUser>
  )
}
