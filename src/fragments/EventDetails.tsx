import BannerImage from '@src/components/BannerImage'
import Container from '@src/components/Container'
import CommunityMenu from '@src/fragments/CommunityMenu'
import EventDetailContent from '@src/fragments/EventDetailContent'
import SubmenuLayout from '@src/layouts/SubmenuLayout'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'

interface CommunityDetailsProps {
  community: CommunityDocument
  event: CommunityEventDocument
}

export default function EventDetails({ community, event }: CommunityDetailsProps) {
  return (
    <Container>
      <BannerImage community={community.data()} event={event.data()} />
      <SubmenuLayout menuContent={<CommunityMenu community={community} />}>
        <Container padding />
        <EventDetailContent event={event.data()} />
      </SubmenuLayout>
    </Container>
  )
}
