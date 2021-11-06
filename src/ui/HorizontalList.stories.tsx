import { Story, Meta } from '@storybook/react'

import HorizontalList from './HorizontalList'

export default {
  title: 'HorizontalList',
  component: HorizontalList,
} as Meta

const Template: Story<any> = (args) => (
  <HorizontalList>
    {[...Array(args.items)].map((_, i) => <div key={i} className="inline-block bg-gray-light w-80 h-40 p-4">Item {i + 1}</div>)}
  </HorizontalList>
)

export const Primary = Template.bind({})
Primary.args = {
  items: 8
}
