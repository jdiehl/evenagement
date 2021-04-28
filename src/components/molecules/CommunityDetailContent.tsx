import firebase from 'firebase/app'

import { Community } from '../../lib/store/types'
import HorizontalList from '../atoms/HorizontalList'

import EventTile from './EventTile'
import UserTile from './UserTile'

interface CommunityDetailContentProps {
  community: Community
}

export default function CommunityDetailContent({ community }: CommunityDetailContentProps) {
  const events = new Array(10).fill({ image: 'http://placekitten.com/400/400', title: 'Daily Session', date: new Date() })
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
        {events.map((event, i) => <EventTile event={event} key={i} />)}
      </HorizontalList>
      <p className="font-bold mt-8">Members</p>
      <HorizontalList>
        {users.map((user, i) => <UserTile user={user} key={i} />)}
      </HorizontalList>
    </>
  )
}
