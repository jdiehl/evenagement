import { Story, Meta } from '@storybook/react'

import { AddTile } from './AddTile'

export default {
  title: 'UI/AddTile',
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
