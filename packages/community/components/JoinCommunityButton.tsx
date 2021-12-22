import { isValidUser } from 'firebase-helpers'
import { CommunityDocument } from 'types'
import { Button } from 'ui'
import { useUser, useCommunityMember } from 'user'

import { setCommunityRole } from '../model'

interface JoinCommunityButtonProps {
  community: CommunityDocument
}

export function JoinCommunityButton({ community }: JoinCommunityButtonProps) {
  const { user } = useUser()
  const userMember = useCommunityMember(community.id, user!.uid)

  const joinCommunity = async () => {
    if (!isValidUser(user)) {
      throw new Error('Not logged in')
    }
    setCommunityRole(community.ref, user!, 'member')
  }

  const leaveCommunity = async () => {
    if (!isValidUser(user)) {
      throw new Error('Not logged in')
    }
    setCommunityRole(community.ref, user!)
  }

  if (!userMember) return null
  if (userMember.exists()) {
    return <Button onClick={leaveCommunity}>Leave</Button>
  }
  return <Button onClick={joinCommunity}>Join Community</Button>
}
