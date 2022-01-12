import { EventNewEdit } from 'event'
import { MainLayoutWithUser } from 'main'
import { GetServerSideProps } from 'next'

interface EventEditPageProps  {
  eventId: string
}

export default function EventEditPage({ eventId }: EventEditPageProps) {
  return (
    <MainLayoutWithUser>
      <EventNewEdit eventId={eventId} />
    </MainLayoutWithUser>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      eventId: context.params?.eventId
    }
  }
}
