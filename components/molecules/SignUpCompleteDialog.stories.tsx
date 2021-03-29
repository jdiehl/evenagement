import { Story, Meta } from '@storybook/react'

import SignUpCompleteDialog from './SignUpCompleteDialog'

export default {
  title: 'Molecules/SignUpCompleteDialog',
  component: SignUpCompleteDialog,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <SignUpCompleteDialog {...args} />

export const Primary = Template.bind({})
Primary.args = {}
