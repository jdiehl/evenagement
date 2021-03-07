import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

export default function MainFooter() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              <Link href="https://github.com/jdiehl/evenagement" target="_blank">Evenagement on GitHub</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
