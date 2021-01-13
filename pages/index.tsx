import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import MainBar from '../components/MainBar'
import MainFooter from '../components/MainFooter'

export default function Home() {
  return <Container maxWidth="lg">
    <MainBar />
    <main>
      <Typography variant="h1">
        Evenagement
      </Typography>
    </main>
    <MainFooter />
  </Container>
}
