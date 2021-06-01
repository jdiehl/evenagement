import Main from '@src/components/organisms/Main'
import UserProfileEdit from '@src/components/organisms/UserProfileEdit'

export default function Profile() {
  return (
    <Main>
      <h1 className="text-2xl my-4">Edit User Profile</h1>
      <UserProfileEdit />
    </Main>
  )
}
