import Button from '@src/components/atoms/Button'
import SubmenuLayout from '@src/components/atoms/SubmenuLayout'
import CommunityDetailContent from '@src/components/molecules/CommunityDetailContent'
import UserContext from '@src/context/UserContext'
import { isValidUser } from '@src/lib/auth'
import { Community, Document, useDoc } from '@src/lib/store'
import { useContext } from 'react'

interface CommunityDetailsProps {
  community: Document<Community>
}

export default function CommunityDetails({ community }: CommunityDetailsProps) {
  const communityData = community.data()
  const user = useContext(UserContext)

  const userMember = useDoc(community.ref.collection('members').doc(user.uid))


  const joinCommunity = async () => {
    if (!isValidUser(user)) { 
      throw 'Not logged in' 
    } 
    await community.ref.collection('members').doc(user.uid).set({ role: 'member', joined: new Date() })
  }

  const leaveCommunity = async () => {
    if (!isValidUser(user)) { 
      throw 'Not logged in' 
    } 
    await community.ref.collection('members').doc(user.uid).delete()
  }

  const actionButton = () => {
    if (!userMember) return 
    if (userMember.exists) {
      return <Button className="w-full h-12 py-3 mt-4" onClick={leaveCommunity}>Leave</Button> 
    }
    return <Button className="w-full h-12 py-3 mt-4" onClick={joinCommunity}>Join Community</Button> 
  }

  const menuContent = (<>
    <p className="font-bold text-xl">{communityData.name}</p>
    <p><a className="underline" href="#">Home</a></p>
    <p><a className="underline" href="#">Upcoming Events</a></p>
    <p><a className="underline" href="#">Past Events</a></p>
    <p><a className="underline" href="#">Members</a></p>
    { actionButton() }
  </>)

  return (<div className="flex flex-col flex-grow max-w-full">
    <img src={communityData.image} alt={communityData.name} className="w-full h-60 object-cover" />

    <SubmenuLayout menuContent={menuContent}>
      <CommunityDetailContent community={community} />
    </SubmenuLayout>
  </div>
  )
}
