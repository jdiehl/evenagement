import { GetServerSideProps } from 'next'

import CommunityView from '@src/content/CommunityView'
import MainLayout from '@src/layouts/MainLayout'

interface CommunityProps {
  id: string
}

export default function Community({ id }: CommunityProps) {
  return (
    <MainLayout>
      <CommunityView id={id} />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.params?.id
    }
  }
}
