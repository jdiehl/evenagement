import Button from '@src/components/atoms/Button'
import { useUser } from '@src/context/UserContext'
import { isValidUser } from '@src/lib/auth'
import { Community, Document, useDoc } from '@src/lib/store'

interface JoinCommunityButtonProps {
  community: Document<Community>
}

export default function JoinCommunityButton({ community }: JoinCommunityButtonProps) {
  const { user } = useUser()
  const userMember = useDoc(community.ref.collection('members').doc(user.uid))

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
    return <Button className="w-full h-12 py-3 mt-4" onClick={leaveCommunity}>Leave</Button>
  }
  return <Button className="w-full h-12 py-3 mt-4" onClick={joinCommunity}>Join Community</Button>
}
