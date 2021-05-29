import Tile from '@src/components/atoms/Tile'
import { User } from '@src/lib/store'

interface UserTileProps {
  user: User
  href?: string
}

export default function UserTile({ user, href }: UserTileProps) {
  const initials = user.displayName.split(' ').slice(0, 2).map(v => v.slice(0, 1).toUpperCase()).join('')

  return (
    <Tile size={24} href={href}>
      {user.photoURL
        ? <img src={user.photoURL} className="w-full h-full" />
        : <div className="absolute w-full h-full flex justify-center items-center text-5xl text-white bg-green-500">{initials}</div>}
    </Tile>
  )
}
