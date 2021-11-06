import { initialsFromName, colorFromName } from '@src/lib/helpers'
import { UserProfile } from '@src/model/UserProfile'
import CoverImage from '@src/ui/CoverImage'
import CoverText from '@src/ui/CoverText'
import Tile from '@src/ui/Tile'

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
