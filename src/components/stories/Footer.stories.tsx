import { Story, Meta } from '@storybook/react'

import Button from '@src/components/Button'
import Footer from '@src/components/Footer'

export default {
  title: 'Footer',
  component: Footer,
  argTypes: {}
} as Meta

const Template: Story = (args) => (
  <Footer>
    {[...Array(args.buttons)].map((_, i) => <Button key={i}>Button {i + 1}</Button>)}
  </Footer>
)

export const Primary = Template.bind({})
Primary.args = {
  buttons: 12
}
