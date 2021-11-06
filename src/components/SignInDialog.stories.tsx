import { Story, Meta } from '@storybook/react'

import SignInDialog from './SignInDialog'

export default {
  title: 'SignInDialog',
  component: SignInDialog,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <SignInDialog {...args} />

export const Primary = Template.bind({})
Primary.args = {}
