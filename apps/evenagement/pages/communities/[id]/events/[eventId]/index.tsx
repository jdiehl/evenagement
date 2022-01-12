import { CommunityEventView } from 'community'
import { MainLayout } from 'main'
import { GetServerSideProps } from 'next'

interface EventProps {
  id: string
  eventId: string
}

export default function Event({ id, eventId }: EventProps) {
  return (
    <MainLayout>
      <CommunityEventView id={id} eventId={eventId} />
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
