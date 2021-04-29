import firebase from 'firebase/app'

import { Community, Event } from '../../lib/store'
import Button from '../atoms/Button'
import HorizontalList from '../atoms/HorizontalList'
import SubmenuLayout from '../atoms/SubmenuLayout'
import CommunityDetailContent from '../molecules/CommunityDetailContent'
import EventDetailContent from '../molecules/EventDetailContent'
import EventTile from '../molecules/EventTile'
import UserTile from '../molecules/UserTile'

interface CommunityDetailsProps {
  community: firebase.firestore.DocumentSnapshot<Community>
}

export default function CommunityDetails({ community: communitySnapshot }: CommunityDetailsProps) {
  const community = communitySnapshot.data()
  const menuContent = (<>
    <p className="font-bold text-xl">{community.name}</p>
    <p><a className="underline" href="#">Home</a></p>
    <p><a className="underline" href="#">Upcoming Events</a></p>
    <p><a className="underline" href="#">Past Events</a></p>
    <p><a className="underline" href="#">Members</a></p>
    <Button className="w-full h-12 py-3 mt-4">Join Community</Button>
  </>)

  return (<div className="flex flex-col flex-grow max-w-full">
    <img src={community.image} alt={community.name} className="w-full h-60 object-cover" />

    <SubmenuLayout menuContent={menuContent}>
      <CommunityDetailContent community={communitySnapshot} />
    </SubmenuLayout>
  </div>
  )
}
