import { NotePencil, PlusCircle } from 'phosphor-react'

import Button from '@src/components/atoms/Button'
import HorizontalList from '@src/components/atoms/HorizontalList'
import Loading from '@src/components/atoms/Loading'
import Text from '@src/components/atoms/Text'
import Tile from '@src/components/atoms/Tile'
import EventTile from '@src/components/molecules/EventTile'
import UserTile from '@src/components/molecules/UserTile'
import { CommunityDocument } from '@src/model/Community'
import { CommunityEventDocument } from '@src/model/CommunityEvent'
import { UserProfileDocument } from '@src/model/UserProfile'

interface CommunityDetailContentProps {
  community: CommunityDocument
  events: CommunityEventDocument[]
  members: UserProfileDocument[]
}

export default function CommunityDetailContent({ community, events, members }: CommunityDetailContentProps) {
  const eventTiles = events?.map((event) =>
    <EventTile href={`/communities/${community.id}/${event.id}`} key={event.id} event={event.data()} />
  )

  if (eventTiles?.length === 0) {
    eventTiles.push(
      <Tile key={1} size={44} className="flex items-center justify-center text-2xl text-gray flex-col border-gray-line border">
        <PlusCircle />
        Add Event
      </Tile>
    )
  }

  return (
    <div className="relative">
      <Text type="h1">{community.data().name}</Text>
      <Button href={`/communities/${community.id}/edit`} className="absolute right-0 top-0" round>
        <NotePencil/>
      </Button>
      <Text>{community.data().description}</Text>
      <div className="mt-8">
        <Text type="h2">Events</Text>
        <HorizontalList className="h-48">
          {events
            ? eventTiles
            : <Loading />}
        </HorizontalList>
      </div>
      <div className="mt-8">
        <Text type="h2">Members</Text>
        <HorizontalList className="h-28">
          {members?.map((memberProfile) => <UserTile userProfile={memberProfile.data()} key={memberProfile.id} />)}
        </HorizontalList>
      </div>
    </div>
  )
}
