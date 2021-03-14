import { Story, Meta } from '@storybook/react'

import UserContext from '../../context/UserContext'

import UserMenu from './UserMenu'

export default {
  title: 'Organisms/UserMenu',
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
