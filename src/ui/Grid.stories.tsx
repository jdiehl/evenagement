import { Story, Meta } from '@storybook/react'

import Grid from './Grid'

export default {
  title: 'UI/Grid',
  component: Grid,
} as Meta

const Template: Story<any> = (args) => (
  <Grid {...args}>
    <div className="h-16 bg-primary" />
    <div className="h-16 bg-primary" />
    <div className="h-16 bg-primary" />
    <div className="h-16 bg-primary" />
    <div className="h-16 bg-primary" />
    <div className="h-16 bg-primary" />
  </Grid>
)

export const Primary = Template.bind({})
Primary.args = {
  cols: 2,
  gap: true
}
