import { EventNewEdit } from 'event'
import { MainLayoutWithUser } from 'main'
import { GetServerSideProps } from 'next'

interface EventCreatePageProps  {
  id: string
  eventId: string
}

export default function EventCreatePage({ id, eventId }: EventCreatePageProps) {
  return (
    <MainLayoutWithUser>
      <EventNewEdit id={id} eventId={eventId} />
    </MainLayoutWithUser>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.params?.id,
      eventId: context.params?.eventId
    }
  }
}
