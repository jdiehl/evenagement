import CoverImage from 'ui/CoverImage'
import CoverText from 'ui/CoverText'
import Tile from 'ui/Tile'

import { initialsFromName, colorFromName } from '@src/lib/helpers'

import { UserProfile } from './model/UserProfile'

interface UserTileProps {
  userProfile: UserProfile
  href?: string
}

export default function UserTile({ userProfile, href }: UserTileProps) {
  const initials = initialsFromName(userProfile.name)
  const bgColor = colorFromName(userProfile.name)

  return (
    <Tile size={24} href={href}>
      {userProfile.image
        ? <CoverImage src={userProfile.image} alt={userProfile.name} />
        : <CoverText bgColor={bgColor}>{initials}</CoverText>}
    </Tile>
  )
}
