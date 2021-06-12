import firebase from 'firebase/app'
import { useContext } from 'react'

import Button from '@src/components/atoms/Button'
import UserContext from '@src/context/UserContext'
import { isValidUser } from '@src/lib/auth'
import { Community, Document } from '@src/lib/store'

interface JoinCommunityButtonProps {
  community: Document<Community>
}

export default function JoinCommunityButton({ community }: JoinCommunityButtonProps) {
  const user = useContext(UserContext)
  const isMember = community.data().members?.includes(user.uid)

  const joinCommunity = async () => {
    if (!isValidUser(user)) {
      throw new Error('Not logged in')
    }
    await community.ref.update({ members: firebase.firestore.FieldValue.arrayUnion(user.uid) })
  }

  const leaveCommunity = async () => {
    if (!isValidUser(user)) {
      throw new Error('Not logged in')
    }
    await community.ref.update({ members: firebase.firestore.FieldValue.arrayRemove(user.uid) })
  }

  if (isMember) {
    return <Button className="w-full h-12 py-3 mt-4" onClick={leaveCommunity}>Leave</Button>
  }
  return <Button className="w-full h-12 py-3 mt-4" onClick={joinCommunity}>Join Community</Button>
}
