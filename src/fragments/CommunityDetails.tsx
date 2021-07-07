import BannerImage from '@src/components/BannerImage'
import Container from '@src/components/Container'
import CommunityDetailContent from '@src/fragments/CommunityDetailContent'
import CommunityMenu from '@src/fragments/CommunityMenu'
import SidebarLayout from '@src/layouts/SidebarLayout'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'
import { UserProfileDocument } from '@src/model/UserProfile'

interface CommunityDetailsProps {
  community: CommunityDocument
  events: CommunityEventDocument[]
  members: UserProfileDocument[]
}

export default function CommunityDetails({ community, events, members }: CommunityDetailsProps) {
  return (
    <Container>
      <BannerImage community={community.data()} />
      <SidebarLayout menuContent={<CommunityMenu community={community} />}>
        <CommunityDetailContent community={community} events={events} members={members} />
      </SidebarLayout>
    </Container>
  )
}
