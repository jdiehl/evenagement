import { GetServerSideProps } from 'next'

import CommunityEditContent from '@src/content/CommunityEditContent'
import MainLayoutWithUser from '@src/layouts/MainLayoutWithUser'

interface CommunityEditProps {
  id: string
}

export default function CommunityEdit({ id }: CommunityEditProps) {
  return (
    <MainLayoutWithUser>
      <CommunityEditContent id={id} />
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
