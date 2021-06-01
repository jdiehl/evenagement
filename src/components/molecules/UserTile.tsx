import Tile from '@src/components/atoms/Tile'
import { UserProfile } from '@src/lib/store'

interface UserTileProps {
  userProfile: UserProfile
  href?: string
}

export default function UserTile({ userProfile, href }: UserTileProps) {
  const initials = userProfile.name.split(' ').slice(0, 2).map(v => v.slice(0, 1).toUpperCase()).join('')

  return (
    <Tile size={24} href={href}>
      {userProfile.image
        ? <img src={userProfile.image} className="w-full h-full" />
        : <div className="absolute w-full h-full flex justify-center items-center text-5xl text-white bg-green-500">{initials}</div>}
    </Tile>
  )
}
