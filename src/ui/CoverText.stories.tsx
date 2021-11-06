import { Story, Meta } from '@storybook/react'

import CoverText from './CoverText'

export default {
  title: 'CoverText',
  component: CoverText,
  argTypes: {}
} as Meta

const Template: Story<any> = ({ bgColor, text }) => (
  <div className="h-48 w-48">
    <CoverText bgColor={bgColor}>{text}</ CoverText>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Hi!',
  bgColor: '#faa020'
}
