import { EventDocument } from 'types'
import { Button, Container, Grid } from 'ui'

import { EventTile } from './EventTile'

interface EventsGridProps {
  events: EventDocument[]
}

export function EventsGrid({ events }: EventsGridProps) {
  return (
    <Container gap padding>
      <Container row justify="end">
        <Button href="/events/create">Create new...</Button>
      </Container>
      <Grid cols={5} gap>
        {events.map(doc => (
          <EventTile key={doc.id} event={doc.data()!} href={`/events/${doc.id}`} />
        ))}
      </Grid>
    </Container>
  )
}
