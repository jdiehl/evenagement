import { Story, Meta } from '@storybook/react'

import SignUpDialog from '@src/components/SignUpDialog'

export default {
  title: 'SignUpDialog',
  component: SignUpDialog,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <SignUpDialog {...args} />

export const Primary = Template.bind({})
Primary.args = {}
