import { MainLayoutWithUser } from 'main'

import CommunityOverview from '@community/pages/CommunityOverview'

export default function CommunitiesMine() {
  return (
    <MainLayoutWithUser>
      <CommunityOverview mine />
    </MainLayoutWithUser>
  )
}
