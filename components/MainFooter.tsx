import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.grey[100],
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

export default function MainFooter() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Evenagement
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          by Jonathan Diehl
        </Typography>
      </Container>
    </footer>
  )
}
