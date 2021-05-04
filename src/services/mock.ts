import { CommunityEvent, Document, User } from '../lib/store'

export const mockEvents = new Array(10).fill({
  data: () => ({ image: 'http://placekitten.com/400/400', title: 'Daily Session', date: new Date() }),
  id: '123'
} as Document<CommunityEvent>)

export const mockUsers = [
  {
    displayName: 'Jan-Peter Krämer',
    photoURL: 'http://placekitten.com/400/400'
  },
  {
    displayName: 'Jonathan Diehl'
  },
  {
    displayName: 'Jonathan Diehl'
  },
  {
    displayName: 'Jan-Peter Krämer',
    photoURL: 'http://placekitten.com/400/400'
  }
] as User[]

export const mockEvent = { image: 'http://placekitten.com/400/400', title: 'Daily Session', date: new Date() }
