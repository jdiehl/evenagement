
import { Community, Event } from '../../lib/store'
import Button from '../atoms/Button'
import SubmenuLayout from '../atoms/SubmenuLayout'
import EventDetailContent from '../molecules/EventDetailContent'

interface CommunityDetailsProps {
  community: Community
  event: Event
}

export default function EventDetails({ community, event }: CommunityDetailsProps) {
  const menuContent = (<>
    <p className="font-bold text-xl">{community.name}</p>
    <p><a className="underline" href="#">Home</a></p>
    <p><a className="underline" href="#">Upcoming Events</a></p>
    <p><a className="underline" href="#">Past Events</a></p>
    <p><a className="underline" href="#">Members</a></p>
    <Button className="w-full h-12 py-3 mt-4">Attend Event</Button>
  </>)

  return (<div className="flex flex-col flex-grow max-w-full">
    <div className="relative">
      <img src={community.image} alt={community.name} className="w-full h-60 object-cover" />
      <img src={event.image} className="w-44 h-44 absolute -bottom-6 left-4" />
    </div>

    <SubmenuLayout menuContent={menuContent}>
      <div className="h-6">&nbsp;</div>
      <EventDetailContent event={event} />
    </SubmenuLayout>
  </div>
  )
}
