import { User } from '../../lib/store'

interface UserTileProps {
  user: User
}

export default function UserTile({ user }: UserTileProps) {
  const initials = user.displayName.split(' ').slice(0, 2).map(v => v.slice(0, 1).toUpperCase()).join('')

  return (
    <div className="relative inline-grid grid-cols-1 grid-rows-1 place-items-center align-top text-5xl text-white w-24 h-24 bg-green-500">
      {user.photoURL
        ? <img src={user.photoURL} className="w-full h-full inline" />
        : initials}
    </div>
  )
}
