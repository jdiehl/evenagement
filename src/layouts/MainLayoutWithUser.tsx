import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

import Loading from '@src/components/Loading'
import { useUser } from '@src/context/UserContext'
import MainLayout from '@src/layouts/MainLayout'

export default function MainLayoutWithUser({ children }: PropsWithChildren<{}>) {
  const router = useRouter()
  const { loading, user } = useUser()
  if (!loading && user === null) {
    router.push('/')
    return null
  }
  return (
    <MainLayout>
      {loading ? <Loading /> : children}
    </MainLayout>
  )
}
