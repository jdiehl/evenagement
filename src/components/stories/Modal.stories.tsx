import { Story, Meta } from '@storybook/react'

import Dialog from '@src/components/Dialog'
import Modal from '@src/components/Modal'

export default {
  title: 'Modal',
  component: Modal,
} as Meta

const Template: Story<any> = (args) => (
  <Modal {...args}>
    <Dialog>
      Modal Dialog
    </Dialog>
  </Modal>
)

export const Primary = Template.bind({})
Primary.args = {
  show: true
}
