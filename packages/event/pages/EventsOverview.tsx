import { Loading } from 'ui'

import { EventsGrid } from '../components'
import { useEvents } from '../model'

interface EventsOverviewProps {
}

export function EventsOverview({}: EventsOverviewProps) {
  const events = useEvents()
  if (events === undefined) return <Loading />

  return (
    <EventsGrid events={events} />
  )
}
