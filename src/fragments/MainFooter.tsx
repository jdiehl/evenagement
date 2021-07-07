import Button from '@src/components/Button'
import Footer from '@src/components/Footer'

interface MainFooterProps {
  dark?: boolean
}

export default function MainFooter({ dark }: MainFooterProps) {
  return (
    <Footer dark={dark}>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>API</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>Imprint</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>Pricing</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>Status</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>Terms</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>Get in Touch</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>Source</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>Privacy</Button>
      <Button type="underline" href="https://github.com/jdiehl/evenagement" external>About</Button>
    </Footer>
  )
}
