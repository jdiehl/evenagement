import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default function VerifyEmailConfirmation() {
  return (
    <Grid container direction='column'>
      <Typography align='center'>
        Welcome on board. Start by exploring some communities.
      </Typography>
      <Button href="/communities">Go to Communities</Button>
    </Grid>
  )
}
