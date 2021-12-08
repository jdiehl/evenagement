import Footer from '@ui/Footer'
import FooterItem from '@ui/FooterItem'

interface MainFooterProps {
  dark?: boolean
}

export default function MainFooter({ dark }: MainFooterProps) {
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
