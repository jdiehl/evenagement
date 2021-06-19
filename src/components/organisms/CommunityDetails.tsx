import Container from '@src/components/atoms/Container'
import SubmenuLayout from '@src/components/atoms/SubmenuLayout'
import BannerImage from '@src/components/molecules/BannerImage'
import CommunityDetailContent from '@src/components/molecules/CommunityDetailContent'
import CommunityMenu from '@src/components/molecules/CommunityMenu'
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
      <BannerImage community={community} />
      <SubmenuLayout menuContent={<CommunityMenu community={community} />}>
        <CommunityDetailContent community={community} events={events} members={members} />
      </SubmenuLayout>
    </Container>
  )
}
