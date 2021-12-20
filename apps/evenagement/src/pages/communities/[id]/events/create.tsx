import { GetServerSideProps } from 'next'

import EventNewEdit from '@event/pages/EventNewEdit'
import MainLayoutWithUser from '@main/layouts/MainLayoutWithUser'

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
