import BannerImage from 'ui/BannerImage'

import { CommunityEventDocument } from '@event/model/CommunityEvent'
import SidebarLayout from '@main/layouts/SidebarLayout'
import { UserProfileDocument } from '@user/model/UserProfile'

import CommunityDetailContent from './CommunityDetailContent'
import CommunityMenu from './CommunityMenu'
import { CommunityDocument } from './model/Community'

interface CommunityDetailsProps {
  community: CommunityDocument
  events: CommunityEventDocument[]
  members: UserProfileDocument[]
}

export default function CommunityDetails({ community, events, members }: CommunityDetailsProps) {
  return (
    <>
      <BannerImage community={community.data()} />
      <SidebarLayout menuContent={<CommunityMenu community={community} />}>
        <CommunityDetailContent community={community} events={events} members={members} />
      </SidebarLayout>
    </>
  )
}
