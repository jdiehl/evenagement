import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from './LoginWindowStyles'
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone'

export default function EmailVerificationFragment() {
  const classes = useStyles()

  return (
    <Box component="div" className={classes.loginWindowContent}>
      <Grid container alignContent="center" justify="center" className={classes.emailVerificationGrid}>
        <EmailTwoToneIcon className={classes.emailVerificationIcon} />
        <Typography align="center">
          We have sent you an email. Click the link inside to finish your registration.
        </Typography>
      </Grid>
    </Box>
  )
}
