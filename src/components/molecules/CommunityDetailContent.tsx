import Link from 'next/link'

import { Document, useQuery } from '../../lib/store'
import { Community, CommunityEvent } from '../../lib/store/types'
import { mockUsers } from '../../services/mock'
import HorizontalList from '../atoms/HorizontalList'
import Loading from '../atoms/Loading'

import EventTile from './EventTile'
import UserTile from './UserTile'

interface CommunityDetailContentProps {
  community: Document<Community>
}

export default function CommunityDetailContent({ community }: CommunityDetailContentProps) {
  const communityData = community.data()

  const eventsQuery = useQuery<CommunityEvent>(community.ref.collection('events') as any)
  const events = eventsQuery && eventsQuery.docs

  return (
    <>
      <p className="font-bold text-xl">{communityData.name}</p>
      <p>{communityData.description}</p>
      <p className="font-bold mt-8">Events</p>
      <HorizontalList>
        {events
          ? events.map((event, i) => <Link href={`/communities/${community.id}/${event.id}`} key={i}>
            <a>
              <EventTile event={event.data()} />
            </a>
          </Link>)
          : <Loading />}
      </HorizontalList>
      <p className="font-bold mt-8">Members</p>
      <HorizontalList>
        {mockUsers.map((user, i) => <UserTile user={user} key={i} />)}
      </HorizontalList>
    </>
  )
}
