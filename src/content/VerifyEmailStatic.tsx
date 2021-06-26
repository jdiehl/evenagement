import Button from '@src/components/Button'
import Container from '@src/components/Container'
import Text from '@src/components/Text'

export default function VerifyEmailContent() {
  return (
    <Container align="center" page gap padding>
      <Text align="center">Welcome on board. Start by exploring some communities.</Text>
      <Container row>
        <Button href="/communities">Go to Communities</Button>
      </Container>
    </Container>
)
}
