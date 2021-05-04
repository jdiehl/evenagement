import { Timestamp } from './collections'

export interface CommunityEvent {
  title: string
  date: Timestamp
  image: string
}

export interface Community {
  name: string
  description?: string
  image?: string
  eventIds?: string[]
}
