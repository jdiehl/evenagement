import { Story, Meta } from '@storybook/react'

import Dialog from './Dialog'

export default {
  title: 'UI/Dialog',
  component: Dialog,
} as Meta

const Template: Story<any> = (args) => (
  <Dialog {...args}>
    Sit deserunt veniam nostrud do velit commodo reprehenderit adipisicing sit aliqua.
  </Dialog>
)

export const Primary = Template.bind({})
Primary.args = {
}
