import { EventDetailContent } from 'event'
import { EventDocument } from 'types'
import { BannerImage } from 'ui'

interface CommunityDetailsProps {
  event: EventDocument
}

export function EventDetails({ event }: CommunityDetailsProps) {
  return (
    <>
      <BannerImage community={event.data()!} />
      <EventDetailContent event={event} />
    </>
  )
}
