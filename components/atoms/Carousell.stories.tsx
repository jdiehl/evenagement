import { Story, Meta } from '@storybook/react'

import Carousell from './Carousell'

export default {
  title: 'Atoms/Carousell',
  component: Carousell,
  argTypes: {}
} as Meta

const Template: Story = (args) => (
  <Carousell index={args.index}>
    {[...Array(args.items)].map((_, i) => <div key={i}>Item {i}</div>)}
  </Carousell>
)

export const Primary = Template.bind({})
Primary.args = {
  index: 1,
  items: 4
}
