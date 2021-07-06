import CoverImage from '@src/components/CoverImage'
import CoverText from '@src/components/CoverText'
import Tile from '@src/components/Tile'
import { initialsFromName, colorFromName } from '@src/lib/helpers'
import { UserProfile } from '@src/model/UserProfile'

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
