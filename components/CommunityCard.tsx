import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Data } from '../services/collections'

const useStyles = makeStyles({
  media: {
    height: 140,
  },
})

export default function CommmunityCard({ community }: { community: Data.Community }) {
  const classes = useStyles()

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={community.image}
          title={community.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {community.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {community.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
