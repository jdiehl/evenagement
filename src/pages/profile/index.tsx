import MainLayoutWithUser from '@main/layouts/MainLayoutWithUser'
import ProfileEdit from '@user/pages/ProfileEdit'

export default function Profile() {
  return (
    <MainLayoutWithUser>
      <ProfileEdit />
    </MainLayoutWithUser>
  )
}
