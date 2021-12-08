import { Story, Meta } from '@storybook/react'
import { NotePencil } from 'phosphor-react'

import Btn from './Button'

export default {
  title: 'UI/Button',
  component: Btn,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ icon, ...args }: any) => <Btn {...args}>{icon}</Btn>

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

export const Round = Template.bind({})
Round.args = {
  icon: <NotePencil />,
  round: true
}
