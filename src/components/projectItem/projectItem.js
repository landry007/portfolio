import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import "./projectItem.css"
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(10deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectImtem(props) {
  const classes = useStyles();

  function toto(){
    console.log('je suis un toto')
  }
  return (
   <div className="_container">
      <Card onClick={toto} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              { props.title[0] }
            </Avatar>
          }
          action={
            <IconButton aria-label="Settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={ props.title }
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="data:image/png;base64,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"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>

        </CardActions>
        
      </Card>

   </div>
  );
}