import CommunityMenu from '@src/fragments/CommunityMenu'
import EventDetailContent from '@src/fragments/EventDetailContent'
import SidebarLayout from '@src/layouts/SidebarLayout'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'
import BannerImage from '@src/ui/BannerImage'
import Container from '@src/ui/Container'

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
        <EventDetailContent community={community} event={event} />
      </SidebarLayout>
    </>
  )
}
