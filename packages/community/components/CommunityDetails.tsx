import { SidebarLayout } from 'main'
import { CommunityDocument, CommunityEventDocument, UserProfileDocument } from 'types'
import { BannerImage } from 'ui'

import { CommunityDetailContent } from './CommunityDetailContent'
import { CommunityMenu } from './CommunityMenu'

interface CommunityDetailsProps {
  community: CommunityDocument
  events: CommunityEventDocument[]
  members: UserProfileDocument[]
}

export function CommunityDetails({ community, events, members }: CommunityDetailsProps) {
  return (
    <>
      <BannerImage community={community.data()!} />
      <SidebarLayout menuContent={<CommunityMenu community={community} />}>
        <CommunityDetailContent community={community} events={events} members={members} />
      </SidebarLayout>
    </>
  )
}
