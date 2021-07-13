import BannerImage from '@src/components/BannerImage'
import Container from '@src/components/Container'
import CommunityMenu from '@src/fragments/CommunityMenu'
import EventDetailContent from '@src/fragments/EventDetailContent'
import SidebarLayout from '@src/layouts/SidebarLayout'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'

interface CommunityDetailsProps {
  community: CommunityDocument
  event: CommunityEventDocument
}

export default function EventDetails({ community, event }: CommunityDetailsProps) {
  return (
    <>
      <BannerImage community={community.data()} event={event.data()} />
      <SidebarLayout menuContent={<CommunityMenu community={community} />}>
        <Container padding />
        <EventDetailContent event={event.data()} />
      </SidebarLayout>
    </>
  )
}
