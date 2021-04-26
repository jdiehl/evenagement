import firebase from 'firebase/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, NotePencil } from 'phosphor-react'

import Button from '../../../components/atoms/Button'
import Loading from '../../../components/atoms/Loading'
import CommunityTile from '../../../components/molecules/CommunityTile'
import HorizontalList from '../../../components/molecules/EventHorizontalList'
import EventHorizontalList from '../../../components/molecules/EventHorizontalList'
import EventTile from '../../../components/molecules/EventTile'
import UserTile from '../../../components/molecules/UserTile'
import Main from '../../../components/organisms/Main'
import { Entities } from '../../../services/collections'
import { useDoc } from '../../../services/firestore'

export default function Communities() {
  // require the router to be ready
  const router = useRouter()
  const id = router.query.id as string

  // subscribe to the community document
  const communityDoc = useDoc(Entities.Community, id)
  const community = communityDoc?.data()

  const mockEvents = new Array(10).fill({ image: 'http://placekitten.com/400/400', title: 'Daily Session' })
  const mockUsers = [
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
    <Main>
      {/* <div className="flex flex-row">
        <Link href="/communities">
          <Button><ArrowLeft /> Back to Communities</Button>
        </Link>
        <Link href={`/communities/${id}/edit`}>
          <Button tag="a"><NotePencil /> Edit</Button>
        </Link>
      </div> */}
      {!communityDoc
        ? <Loading/>
        : <div className="flex flex-col flex-grow max-w-full">
          <img src={community.image} alt={community.name} className="w-full h-60 object-cover" />
          <div className="flex-grow flex">
            <div className="flex-grow overflow-hidden p-4">
              <p className="font-bold text-xl">{community.name}</p>
              <p>{community.description}</p>
              <p className="font-bold mt-8">Events</p>
              <HorizontalList>
                {mockEvents.map((event, i) => <EventTile event={event} key={i} />)}
              </HorizontalList>
              <p className="font-bold mt-8">Members</p>
              <HorizontalList>
                {mockUsers.map((user, i) => <UserTile user={user} key={i} />)}
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
      }
    </Main>
  )
}
