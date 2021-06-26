import BannerImage from '@src/components/BannerImage'
import Container from '@src/components/Container'
import CommunityDetailContent from '@src/fragments/CommunityDetailContent'
import CommunityMenu from '@src/fragments/CommunityMenu'
import SubmenuLayout from '@src/layouts/SubmenuLayout'
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
      <SubmenuLayout menuContent={<CommunityMenu community={community} />}>
        <CommunityDetailContent community={community} events={events} members={members} />
      </SubmenuLayout>
    </Container>
  )
}
