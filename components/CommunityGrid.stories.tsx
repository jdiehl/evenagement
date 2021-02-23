import { Story, Meta } from '@storybook/react'
import CommunityGrid from './CommunityGrid'

function mockQuery(docs: any): any {
  return {
    docs: docs.map((doc: any) => ({
      id: doc.id,
      data: () => doc
    }))
  }
}

export default {
  title: 'CommunityGrid',
  component: CommunityGrid,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <CommunityGrid communities={mockQuery(args.docs)} />

export const Primary = Template.bind({})
Primary.args = {
  docs: [
    { name: 'My Community', description: 'Lorem ipsum...', image: '' },
    { name: 'More Stuff', description: 'Lalala...', image: '' },
    { name: 'Something else', description: 'Lululu...', image: '' },
    { name: 'Number Four', description: 'More...', image: '' }
  ]
}
