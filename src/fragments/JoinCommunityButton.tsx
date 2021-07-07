import Button from '@src/components/Button'
import { useUser } from '@src/context/UserContext'
import { isValidUser } from '@src/lib/firebase'
import { CommunityDocument } from '@src/model/Community'
import { useCommunityMember } from '@src/model/CommunityMember'

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
    await community.ref.collection('members').doc(user.uid).set({ uid: user.uid, role: 'member', joined: new Date() })
  }

  const leaveCommunity = async () => {
    if (!isValidUser(user)) {
      throw new Error('Not logged in')
    }
    await community.ref.collection('members').doc(user.uid).delete()
  }

  if (!userMember) return null
  if (userMember.exists) {
    return <Button onClick={leaveCommunity}>Leave</Button>
  }
  return <Button onClick={joinCommunity}>Join Community</Button>
}
