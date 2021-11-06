import { Story, Meta } from '@storybook/react'

import AddTile from '@src/components/AddTile'

export default {
  title: 'AddTile',
  component: AddTile,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <AddTile {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Add Something'
}
