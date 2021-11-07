import CommunityMenu from '@community/CommunityMenu'
import { CommunityDocument } from '@community/model/Community'
import SidebarLayout from '@main/layouts/SidebarLayout'
import BannerImage from '@ui/BannerImage'
import Container from '@ui/Container'

import EventDetailContent from './EventDetailContent'
import { CommunityEventDocument } from './model/CommunityEvent'

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
