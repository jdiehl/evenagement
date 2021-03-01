import { Story, Meta } from '@storybook/react'
import CommmunityCard from './CommunityCard'
import CommunityGrid from './CommunityGrid'

export default {
  title: 'CommunityGrid',
  component: CommunityGrid,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <CommunityGrid>
    {args.docs.map((doc, i) => <CommmunityCard key={i}community={doc} />)}
  </CommunityGrid>
)

export const Primary = Template.bind({})
Primary.args = {
  docs: [
    { name: 'My Community', description: 'Lorem ipsum...', image: '' },
    { name: 'More Stuff', description: 'Lalala...', image: '' },
    { name: 'Something else', description: 'Lululu...', image: '' },
    { name: 'Number Four', description: 'More...', image: '' }
  ]
}
