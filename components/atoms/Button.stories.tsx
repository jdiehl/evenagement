import { Story, Meta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <Button {...args} />

export const Fill = Template.bind({})
Fill.args = {
  label: 'Filled Button',
  type: 'fill'
}

export const Outline = Template.bind({})
Outline.args = {
  label: 'Outlined Button',
  type: 'outline'
}
