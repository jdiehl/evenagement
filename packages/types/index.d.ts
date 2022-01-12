import { DocumentSnapshot, Timestamp } from 'firebase/firestore'

export type CommunityMemberRole = 'member' | 'organizer'
export type CommunityEventMemberRole = 'organizer' | 'attendee'

export interface Community {
  name: string
  description?: string
  image?: string
  private?: boolean
}

export interface CommunityEvent {
  name: string
  date: Timestamp
  image: string
}

export interface CommunityMember {
  uid: string
  role: CommunityMemberRole
  joined: Date
}

export interface CommunityEventMember {
  uid: string
  role: CommunityEventMemberRole
  registered: Date
}

export interface UserProfile {
  name: string
  image?: string
}

export type CommunityDocument = DocumentSnapshot<Community>
export type CommunityEventDocument = DocumentSnapshot<CommunityEvent>
export type CommunityMemberDocument = DocumentSnapshot<CommunityMember>
export type UserProfileDocument = DocumentSnapshot<UserProfile>
