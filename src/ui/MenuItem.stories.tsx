import { Story, Meta } from '@storybook/react'

import MenuItem from './MenuItem'

export default {
  title: 'MenuItem',
  component: MenuItem,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <MenuItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Some item'
}
