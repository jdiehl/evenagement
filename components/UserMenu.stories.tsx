import { Story, Meta } from '@storybook/react'
import UserMenu from './UserMenu'
import UserContext from '../context/UserContext'

export default {
  title: 'UserMenu',
  component: UserMenu,
  argTypes: {}
} as Meta

const Template: Story = (args) => (
  <UserContext.Provider value={args.user}>
    <UserMenu />
  </UserContext.Provider>
)

export const Primary = Template.bind({})
Primary.args = { user: { displayName: 'Testuser' } }
