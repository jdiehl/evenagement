import { UserProfile } from 'types'
import { CoverImage, CoverText, Tile } from 'ui'

import { initialsFromName, colorFromName } from '../helpers'

interface UserTileProps {
  userProfile: UserProfile
  href?: string
}

export function UserTile({ userProfile, href }: UserTileProps) {
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
