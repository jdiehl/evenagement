import { CommunityDocument, CommunityEventDocument } from 'types'
import { BannerImage, Container } from 'ui'

import CommunityMenu from '@community/CommunityMenu'
import SidebarLayout from '@main/layouts/SidebarLayout'

import EventDetailContent from './EventDetailContent'

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
