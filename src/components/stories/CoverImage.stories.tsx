import { Story, Meta } from '@storybook/react'

import CoverImage from '@src/components/CoverImage'

export default {
  title: 'CoverImage',
  component: CoverImage,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => (
  <div className="h-48 w-48">
    <CoverImage {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  alt: 'Puppy!',
  src: 'https://place-puppy.com/400x400'
}
