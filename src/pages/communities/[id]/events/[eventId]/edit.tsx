import { GetServerSideProps } from 'next'

import EventNewEdit from '@event/pages/EventNewEdit'
import MainLayoutWithUser from '@main/layouts/MainLayoutWithUser'

interface EventCreatePageProps  {
  id: string
  eventId: string
}

export default function EventCreatePage({id, eventId}: EventCreatePageProps) {
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
