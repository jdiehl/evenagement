import { Story, Meta } from '@storybook/react'

import HeroContainer from '@src/components/HeroContainer'

export default {
  title: 'HeroContainer',
  component: HeroContainer,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <HeroContainer />

export const Primary = Template.bind({})
Primary.args = {
}
