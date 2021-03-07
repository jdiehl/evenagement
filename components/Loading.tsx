import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  grid: {
    minHeight: 200
  },
}))

export default function Loading() {
  const css = useStyles()
  return (
    <Grid container justify="center" alignItems="center" className={css.grid}>
      <CircularProgress />
    </Grid>
  )
}
