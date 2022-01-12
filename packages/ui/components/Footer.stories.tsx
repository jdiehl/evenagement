import { Story, Meta } from '@storybook/react'

import { Footer } from './Footer'
import { FooterItem } from './FooterItem'

export default {
  title: 'UI/Footer',
  component: Footer,
  argTypes: {}
} as Meta

const Template: Story = (args) => (
  <Footer>
    {[...Array(args.buttons)].map((_, i) => <FooterItem key={i}>Item {i + 1}</FooterItem>)}
  </Footer>
)

export const Primary = Template.bind({})
Primary.args = {
  buttons: 12
}
