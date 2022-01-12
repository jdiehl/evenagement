import { EventNewEdit } from 'event'
import { MainLayoutWithUser } from 'main'
import { GetServerSideProps } from 'next'

interface CommunityEventCreatePageProps  {
  id: string
}

export default function CommunityEventCreatePage({ id }: CommunityEventCreatePageProps) {
  return (
    <MainLayoutWithUser>
      <EventNewEdit id={id} />
    </MainLayoutWithUser>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.params?.id,
    }
  }
}
