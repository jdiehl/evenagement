import { GetServerSideProps } from 'next'

import CommunityContent from '@src/content/CommunityContent'
import MainLayout from '@src/layouts/MainLayout'

interface CommunityProps {
  id: string
}

export default function Community({ id }: CommunityProps) {
  return (
    <MainLayout>
      <CommunityContent id={id} />
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
