import Container from '@src/components/atoms/Container'
import SubmenuLayout from '@src/components/atoms/SubmenuLayout'
import BannerImage from '@src/components/molecules/BannerImage'
import CommunityMenu from '@src/components/molecules/CommunityMenu'
import EventDetailContent from '@src/components/molecules/EventDetailContent'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'

interface CommunityDetailsProps {
  community: CommunityDocument
  event: CommunityEventDocument
}

export default function EventDetails({ community, event }: CommunityDetailsProps) {
  return (
    <Container>
      <BannerImage community={community} event={event} />
      <SubmenuLayout menuContent={<CommunityMenu community={community} />}>
        <Container padding={true} />
        <EventDetailContent event={event.data()} />
      </SubmenuLayout>
    </Container>
  )
}
