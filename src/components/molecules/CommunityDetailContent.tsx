import firebase from 'firebase/app'
import Link from 'next/link'

import { Community, Event } from '../../lib/store/types'
import HorizontalList from '../atoms/HorizontalList'

import EventTile from './EventTile'
import UserTile from './UserTile'

interface CommunityDetailContentProps {
  community: firebase.firestore.DocumentSnapshot<Community>
}

export default function CommunityDetailContent({ community: communitySnapshot }: CommunityDetailContentProps) {
  const community = communitySnapshot.data()

  const events = new Array(10).fill({
    data: () => ({ image: 'http://placekitten.com/400/400', title: 'Daily Session', date: new Date() }),
    id: '123'
  } as firebase.firestore.DocumentSnapshot<Event>)
  const users = [
    {
      displayName: 'Jan-Peter Krämer',
      photoURL: 'http://placekitten.com/400/400'
    },
    {
      displayName: 'Jonathan Diehl'
    },
    {
      displayName: 'Jonathan Diehl'
    },
    {
      displayName: 'Jan-Peter Krämer',
      photoURL: 'http://placekitten.com/400/400'
    }
  ] as firebase.User[]

  return (
    <>
      <p className="font-bold text-xl">{community.name}</p>
      <p>{community.description}</p>
      <p className="font-bold mt-8">Events</p>
      <HorizontalList>
        {events.map((event, i) => <Link href={`/communities/${communitySnapshot.id}/${event.id}`} key={i}>
          <a>
            <EventTile event={event.data()} />
          </a>
        </Link>)}
      </HorizontalList>
      <p className="font-bold mt-8">Members</p>
      <HorizontalList>
        {users.map((user, i) => <UserTile user={user} key={i} />)}
      </HorizontalList>
    </>
  )
}
