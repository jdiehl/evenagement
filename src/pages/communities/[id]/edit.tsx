import { GetServerSideProps } from 'next'

import CommunityNewEdit from '@src/content/CommunityNewEdit'
import MainLayoutWithUser from '@src/layouts/MainLayoutWithUser'

interface CommunityEditProps {
  id: string
}

export default function CommunityEdit({ id }: CommunityEditProps) {
  return (
    <MainLayoutWithUser>
      <CommunityNewEdit id={id} />
    </MainLayoutWithUser>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.params?.id
    }
  }
}
