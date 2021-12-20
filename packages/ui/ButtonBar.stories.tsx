import { Story, Meta } from '@storybook/react'

import { Button } from './Button'
import { ButtonBar } from './ButtonBar'

export default {
  title: 'UI/ButtonBar',
  component: ButtonBar,
  argTypes: {}
} as Meta

const Template: Story = (args) => (
  <ButtonBar>
    {[...Array(args.buttons)].map((_, i) => <Button key={i}>Button {i + 1}</Button>)}
  </ButtonBar>
)

export const Primary = Template.bind({})
Primary.args = {
  buttons: 4
}
