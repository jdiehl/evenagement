import { DocumentSnapshot, Timestamp } from 'firebase/firestore'
import { Community } from 'types'

export type CommunityMemberRole = 'member' | 'organizer'
export type EventMemberRole = 'organizer' | 'attendee'

export interface Community {
  name: string
  description?: string
  image?: string
  private?: boolean
}

export interface Event {
  name: string
  date: Timestamp
  image: string
  communityId: string | null
}

export interface CommunityMember {
  uid: string
  role: CommunityMemberRole
  joined: Date
}

export interface EventMember {
  uid: string
  role: EventMemberRole
  registered: Date
}

export interface UserProfile {
  name: string
  image?: string
}

export type CommunityDocument = DocumentSnapshot<Community>
export type EventDocument = DocumentSnapshot<Event>
export type CommunityMemberDocument = DocumentSnapshot<CommunityMember>
export type UserProfileDocument = DocumentSnapshot<UserProfile>
