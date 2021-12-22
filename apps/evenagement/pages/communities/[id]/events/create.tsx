import { EventNewEdit } from 'event'
import { MainLayoutWithUser } from 'main'
import { GetServerSideProps } from 'next'

interface EventCreatePageProps  {
  id: string
}

export default function EventCreatePage({ id }: EventCreatePageProps) {
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
