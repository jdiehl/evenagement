import { makeStyles } from '@material-ui/core/styles'
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
      <Typography align="center" variant="h1">
        Evenagement
      </Typography>
      <Typography align="center" variant="h4">
        Community Management
      </Typography>
    </Grid>
  )
}
