import { EventNewEdit } from 'event'
import { MainLayoutWithUser } from 'main'

interface EventCreatePageProps  {
}

export default function EventCreatePage({}: EventCreatePageProps) {
  return (
    <MainLayoutWithUser>
      <EventNewEdit />
    </MainLayoutWithUser>
  )
}
