import Button from '@src/components/atoms/Button'
import HorizontalList from '@src/components/atoms/HorizontalList'
import Loading from '@src/components/atoms/Loading'
import Tile from '@src/components/atoms/Tile'
import EventTile from '@src/components/molecules/EventTile'
import UserTile from '@src/components/molecules/UserTile'
import { mockUsers } from '@src/lib/mock'
import { Document, useQuery, Community, CommunityEvent } from '@src/lib/store'
import { NotePencil, PlusCircle } from 'phosphor-react'

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
      <h1 className="relative font-bold text-2xl">{communityData.name}
        <Button round={true} href={`/communities/${community.id}/edit`} className="absolute right-0 top-0">
          <NotePencil/>
        </Button>
      </h1>
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
