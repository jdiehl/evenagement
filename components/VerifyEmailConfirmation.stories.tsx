import { Story, Meta } from '@storybook/react'

import VerifyEmailConfirmation from './VerifyEmailConfirmation'

export default {
  title: 'VerifyEmailConfirmation',
  component: VerifyEmailConfirmation,
  argTypes: {}
} as Meta

const Template: Story = (args) => <VerifyEmailConfirmation {...args} />

export const Primary = Template.bind({})
Primary.args = {}
