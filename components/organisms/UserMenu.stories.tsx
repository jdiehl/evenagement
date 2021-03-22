import { Story, Meta } from '@storybook/react'

import UserMenu from './UserMenu'

export default {
  title: 'Organisms/UserMenu',
  component: UserMenu,
  argTypes: {}
} as Meta

const Template: Story = () => (
  <div className="w-64 flex flex-row-reverse">
    <UserMenu />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
