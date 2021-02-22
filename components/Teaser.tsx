import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  hero: {
    minHeight: 400
  },
  buttons: {
    marginTop: theme.spacing(3),
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function Teaser() {
  const css = useStyles()
  return (
    <Grid container justify="center" alignItems="center" direction="column" className={css.hero}>
      <Typography variant="body1">
        Evenagement is a platform for communities to organize events.
        As a host can invite and manage your members, create and announce events, track RSVPs and attendance,
        and post summaries of past events including slides and videos.
      </Typography>
      <div className={css.buttons}>
        <Button variant="contained" color="primary">
          Start a Community
        </Button>
        <Button variant="outlined" color="primary">
          Join a community
        </Button>
      </div>
    </Grid>
  )
}
