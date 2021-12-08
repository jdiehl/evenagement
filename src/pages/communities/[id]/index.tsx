import { GetServerSideProps } from 'next'

import CommunityView from '@community/pages/CommunityView'
import MainLayout from '@main/layouts/MainLayout'

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
