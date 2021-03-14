import { Story, Meta } from '@storybook/react'

import CommunityGrid from './CommunityGrid'
import CommunityTile from './CommunityTile'

export default {
  title: 'CommunityGrid',
  component: CommunityGrid,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <CommunityGrid>
    {args.docs.map((doc, i) => <CommunityTile key={i} community={doc} />)}
  </CommunityGrid>
)

export const Primary = Template.bind({})
Primary.args = {
  docs: [
    { name: 'My Community', description: 'Nulla incididunt veniam in et consequat consequat proident nisi velit exercitation elit elit labore. Adipisicing commodo sint ex sit non. Dolore eu qui sint incididunt dolor cillum mollit nostrud cillum occaecat consectetur aliquip duis. Consectetur qui tempor est incididunt cupidatat duis sint ad cillum aliquip do. Qui est ipsum officia incididunt reprehenderit ipsum laboris do magna reprehenderit aute.', image: 'https://placekitten.com/600/300' },
    { name: 'More Stuff', description: 'Lalala...', image: 'https://placekitten.com/600/300' },
    { name: 'Something else', description: 'Lululu...', image: 'https://placekitten.com/600/300' },
    { name: 'Number Four', description: 'More...', image: 'https://placekitten.com/600/300' }
  ]
}
