import { Footer, FooterItem } from 'ui'

interface MainFooterProps {
  dark?: boolean
}

export function MainFooter({ dark }: MainFooterProps) {
  return (
    <Footer dark={dark}>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>API</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>Imprint</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>Pricing</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>Status</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>Terms</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>Get in Touch</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>Source</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>Privacy</FooterItem>
      <FooterItem href="https://github.com/jdiehl/evenagement" external>About</FooterItem>
    </Footer>
  )
}
