import { EventView } from 'event'
import { MainLayout } from 'main'
import { GetServerSideProps } from 'next'

interface EventProps {
  eventId: string
}

export default function Event({ eventId }: EventProps) {
  return (
    <MainLayout>
      <EventView eventId={eventId} />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      eventId: context.params?.eventId
    }
  }
}
