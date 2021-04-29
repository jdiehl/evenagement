
export interface Event {
  title: string
  date: Date
  image: string
}
export interface Community {
  name: string
  description?: string
  image?: string
  eventIds?: string[]
}
