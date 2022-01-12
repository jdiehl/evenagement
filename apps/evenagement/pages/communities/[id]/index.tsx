import { CommunityView } from 'community'
import { MainLayout } from 'main'
import { GetServerSideProps } from 'next'

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
