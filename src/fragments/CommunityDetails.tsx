import CommunityDetailContent from '@src/fragments/CommunityDetailContent'
import CommunityMenu from '@src/fragments/CommunityMenu'
import SidebarLayout from '@src/layouts/SidebarLayout'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'
import { UserProfileDocument } from '@src/model/UserProfile'
import BannerImage from '@src/ui/BannerImage'

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
