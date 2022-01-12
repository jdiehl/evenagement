import { EventDetailContent } from 'event'
import { SidebarLayout } from 'main'
import { CommunityDocument, EventDocument } from 'types'
import { BannerImage, Container } from 'ui'

import { CommunityMenu } from './CommunityMenu'

interface CommunityDetailsProps {
  community: CommunityDocument
  event: EventDocument
}

export function CommunityEvent({ community, event }: CommunityDetailsProps) {
  return (
    <>
      <BannerImage community={community.data()!} event={event.data()} />
      <SidebarLayout menuContent={<CommunityMenu community={community} />}>
        <Container padding />
        <EventDetailContent community={community} event={event} />
      </SidebarLayout>
    </>
  )
}
