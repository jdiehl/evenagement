import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: 400
  }
}))

export default function Hero() {
  const css = useStyles()
  return (
    <Grid container justify="center" alignItems="center" direction="column" className={css.hero}>
      <Container>
        <Typography align="center" variant="h1">
          Evenagement
        </Typography>
        <Typography align="center" variant="h4">
          Community Management
        </Typography>
      </Container>
    </Grid>
  )
}
