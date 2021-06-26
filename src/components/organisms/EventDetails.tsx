import Button from '@src/components/atoms/Button'
import SubmenuLayout from '@src/components/atoms/SubmenuLayout'
import EventDetailContent from '@src/components/molecules/EventDetailContent'
import { Community, CommunityEvent, Document } from '@src/lib/store'

interface CommunityDetailsProps {
  community: Document<Community>
  event: Document<CommunityEvent>
}

export default function EventDetails({ community, event }: CommunityDetailsProps) {
  const communityData = community.data()
  const eventData = event.data()

  const menuContent = (<>
    <p className="font-bold text-xl">{communityData.name}</p>
    <p><a className="underline" href="#">Home</a></p>
    <p><a className="underline" href="#">Upcoming Events</a></p>
    <p><a className="underline" href="#">Past Events</a></p>
    <p><a className="underline" href="#">Members</a></p>
    <Button className="w-full h-12 py-3 mt-4">Attend Event</Button>
  </>)

  return (<div className="flex flex-col flex-grow max-w-full">
    <div className="relative">
      <img src={communityData.image} alt={communityData.name} className="w-full h-60 object-cover" />
      <img src={eventData.image} alt={eventData.title} className="w-44 h-44 absolute -bottom-6 left-4" />
    </div>

    <SubmenuLayout menuContent={menuContent}>
      <div className="h-6">&nbsp;</div>
      <EventDetailContent event={eventData} />
    </SubmenuLayout>
  </div>
  )
}
