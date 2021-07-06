import { Story, Meta } from '@storybook/react'

import Grid from '@src/components/Grid'

export default {
  title: 'Grid',
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
