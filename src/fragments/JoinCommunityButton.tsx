import { useUser } from '@src/context/UserContext'
import { isValidUser } from '@src/lib/firebase'
import { CommunityDocument, setCommunityRole } from '@src/model/Community'
import { useCommunityMember } from '@src/model/CommunityMember'
import Button from '@src/ui/Button'

interface JoinCommunityButtonProps {
  community: CommunityDocument
}

export default function JoinCommunityButton({ community }: JoinCommunityButtonProps) {
  const { user } = useUser()
  const userMember = useCommunityMember(community.id, user.uid)

  const joinCommunity = async () => {
    if (!isValidUser(user)) {
      throw new Error('Not logged in')
    }
    setCommunityRole(community.ref, user, 'member')
  }

  const leaveCommunity = async () => {
    if (!isValidUser(user)) {
      throw new Error('Not logged in')
    }
    setCommunityRole(community.ref, user)
  }

  if (!userMember) return null
  if (userMember.exists) {
    return <Button onClick={leaveCommunity}>Leave</Button>
  }
  return <Button onClick={joinCommunity}>Join Community</Button>
}
