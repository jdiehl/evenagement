import { Story, Meta } from '@storybook/react'

import Line from '@src/components/Line'

export default {
  title: 'Line',
  component: Line,
  argTypes: {}
} as Meta

const Template: Story = (args) => <Line {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some Label'
}
