import { EventNewEdit } from 'event'
import { MainLayoutWithUser } from 'main'
import { GetServerSideProps } from 'next'

interface CommunityEventEditPageProps  {
  id: string
  eventId: string
}

export default function CommunityEventEditPage({ id, eventId }: CommunityEventEditPageProps) {
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
