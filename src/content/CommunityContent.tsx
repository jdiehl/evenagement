import Loading from '@src/components/atoms/Loading'
import CommunityDetails from '@src/components/organisms/CommunityDetails'
import { useCommunity } from '@src/model/Community'
import { useEvents } from '@src/model/CommunityEvent'
import { useCommunityMemberProfiles } from '@src/model/UserProfile'

interface CommunityContentProps {
  id: string
}

export default function CommunityContent({ id }: CommunityContentProps) {
  const community = useCommunity(id)
  const events = useEvents(id)
  const members = useCommunityMemberProfiles(id)

  if (!community) return <Loading />
  return (
    <CommunityDetails community={community} events={events} members={members} />
  )
}
