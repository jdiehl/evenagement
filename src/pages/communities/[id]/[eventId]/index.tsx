import { GetServerSideProps } from 'next'

import EventView from '@src/content/EventView'
import MainLayout from '@src/layouts/MainLayout'

interface EventProps {
  id: string
  eventId: string
}

export default function Event({ id, eventId }: EventProps) {
  return (
    <MainLayout>
      <EventView id={id} eventId={eventId} />
    </MainLayout>
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
