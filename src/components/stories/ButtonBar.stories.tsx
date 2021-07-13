import { Story, Meta } from '@storybook/react'

import Button from '@src/components/Button'
import ButtonBar from '@src/components/ButtonBar'

export default {
  title: 'ButtonBar',
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
