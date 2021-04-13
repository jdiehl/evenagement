import { Story, Meta } from '@storybook/react'

import Btn from './Button'

export default {
  title: 'Atoms/Button',
  component: Btn,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <Btn {...args} />

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

export const Button = Template.bind({})
Button.args = {
  label: 'Button Tag',
  tag: 'button'
}

export const Input = Template.bind({})
Input.args = {
  label: 'Input Tag',
  tag: 'input'
}

export const Floating = Template.bind({})
Floating.args = {
  label: 'Floating Button',
  floating: true
}
