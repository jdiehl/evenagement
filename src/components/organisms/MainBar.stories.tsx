import { Story, Meta } from '@storybook/react'

import MainBar from '@src/components/organisms/MainBar'
import { UserContext } from '@src/context/UserContext'

export default {
  title: 'Organisms/MainBar',
  component: MainBar,
  argTypes: {}
} as Meta

const Template: Story = (args) => (
  <UserContext.Provider value={args.user}>
    <MainBar />
  </UserContext.Provider>
)

export const Primary = Template.bind({})
Primary.args = { user: null }

export const LoggedIn = Template.bind({})
LoggedIn.args = { user: { displayName: 'Testuser' } }
