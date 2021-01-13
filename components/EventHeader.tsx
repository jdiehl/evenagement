import { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import EventContext from '../context/EventContext'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    height: 300,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: theme.spacing(1),
    textAlign: 'center',
    '-webkit-text-stroke': '1px black',
    '-webkit-text-fill-color': 'white',
  },
}))

export default function EventHeader() {
  const classes = useStyles()
  const event = useContext(EventContext)

  return <Paper className={classes.header}>
    <Image src={event.data().image} layout="fill" objectFit="cover" />
    <Typography className={classes.title} component="h1" variant="h3" color="inherit">
      {event.data().title}
    </Typography>
  </Paper>
}
