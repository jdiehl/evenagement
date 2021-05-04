import Link from 'next/link'

import { Document } from '../../lib/store'
import { Community } from '../../lib/store/types'
import { mockEvents, mockUsers } from '../../services/mock'
import HorizontalList from '../atoms/HorizontalList'

import EventTile from './EventTile'
import UserTile from './UserTile'

interface CommunityDetailContentProps {
  community: Document<Community>
}

export default function CommunityDetailContent({ community: communitySnapshot }: CommunityDetailContentProps) {
  const community = communitySnapshot.data()

  return (
    <>
      <p className="font-bold text-xl">{community.name}</p>
      <p>{community.description}</p>
      <p className="font-bold mt-8">Events</p>
      <HorizontalList>
        {mockEvents.map((event, i) => <Link href={`/communities/${communitySnapshot.id}/${event.id}`} key={i}>
          <a>
            <EventTile event={event.data()} />
          </a>
        </Link>)}
      </HorizontalList>
      <p className="font-bold mt-8">Members</p>
      <HorizontalList>
        {mockUsers.map((user, i) => <UserTile user={user} key={i} />)}
      </HorizontalList>
    </>
  )
}
