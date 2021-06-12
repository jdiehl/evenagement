import { Timestamp } from './collections'

export interface CommunityEvent {
  title: string
  date: Timestamp
  image: string
}

export interface CommunityMember {
  role: 'member' | 'admin'
  joined: Date
}

export interface Community {
  name: string
  description?: string
  image?: string
  members: string[]
}

export interface UserProfile {
  name: string
  image?: string
}
