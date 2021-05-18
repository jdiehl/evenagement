import { PlusCircle } from 'phosphor-react'

import { Document, useQuery } from '../../lib/store'
import { Community, CommunityEvent } from '../../lib/store/types'
import { mockUsers } from '../../services/mock'
import HorizontalList from '../atoms/HorizontalList'
import Loading from '../atoms/Loading'
import Tile from '../atoms/Tile'

import EventTile from './EventTile'
import UserTile from './UserTile'

interface CommunityDetailContentProps {
  community: Document<Community>
}

export default function CommunityDetailContent({ community }: CommunityDetailContentProps) {
  const communityData = community.data()

  const eventsQuery = useQuery<CommunityEvent>(community.ref.collection('events') as any)
  const events = eventsQuery?.docs

  const eventTiles = events?.map((event, i) =>
    <EventTile href={`/communities/${community.id}/${event.id}`} key={i} event={event.data()} />
  )

  if (eventTiles?.length === 0) {
    eventTiles.push(
      <Tile size={44} className="flex items-center justify-center text-2xl text-gray flex-col border-gray-line border">
        <PlusCircle />
        Add Event
      </Tile>
    )
  }

  return (
    <>
      <p className="font-bold text-xl">{communityData.name}</p>
      <p>{communityData.description}</p>
      <p className="font-bold mt-8">Events</p>
      <HorizontalList className="h-48">
        {events
          ? eventTiles
          : <Loading />}
      </HorizontalList>
      <p className="font-bold mt-8">Members</p>
      <HorizontalList className="h-28">
        {mockUsers.map((user, i) => <UserTile user={user} key={i} />)}
      </HorizontalList>
    </>
  )
}
