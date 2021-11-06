import { Story, Meta } from '@storybook/react'

import HeroContainer from './HeroContainer'

export default {
  title: 'UI/HeroContainer',
  component: HeroContainer,
  argTypes: {}
} as Meta

const Template: Story<any> = (args) => <HeroContainer />

export const Primary = Template.bind({})
Primary.args = {
}
