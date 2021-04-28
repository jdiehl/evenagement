import firebase from 'firebase/app'

import { Community } from '../../lib/store'
import Button from '../atoms/Button'
import HorizontalList from '../atoms/HorizontalList'
import EventTile from '../molecules/EventTile'
import UserTile from '../molecules/UserTile'

interface CommunityDetailsProps {
  community: Community
}

export default function CommunityDetails({ community }: CommunityDetailsProps) {
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

  return (<div className="flex flex-col flex-grow max-w-full">
    <img src={community.image} alt={community.name} className="w-full h-60 object-cover" />
    <div className="flex-grow flex">
      <div className="flex-grow overflow-hidden p-4">
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
      </div>
      <div className="bg-primary-dark flex-none w-80 self-stretch text-white p-4">
        <p className="font-bold text-xl">{community.name}</p>
        <p><a className="underline" href="#">Home</a></p>
        <p><a className="underline" href="#">Upcoming Events</a></p>
        <p><a className="underline" href="#">Past Events</a></p>
        <p><a className="underline" href="#">Members</a></p>
        <Button className="w-full h-12 py-3 mt-4">Join Community</Button>
      </div>
    </div>
  </div>
  )
}
