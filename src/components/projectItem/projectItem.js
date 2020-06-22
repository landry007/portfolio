import React, { useState, useEffect } from 'react'
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

import Dialog from '../utilsComponents/dialog'


import "./projectItem.css"

import firebase from '../config/fireBaseConfig'
import 'firebase/storage';


  const storageRoot = firebase.storage().ref()

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

  const classes = useStyles()
  const [url_image , setUrl_image ] = useState(0)
  const [url_video , setUrl_video ] = useState(null)


  useEffect(() => {

    storageRoot.child(`videos/${props.project.id}/${ props.project.get('images_id')[0] }.mp4` ).getDownloadURL().then( url =>{
      setUrl_video(url)
      
    })

    storageRoot.child(`images/${props.project.id}/${ props.project.get('images_id')[0] }.png` ).getDownloadURL().then( url =>{
      setUrl_image(url)
      
    }).catch(function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          console.log('// File doesn\'t exist');
          
          break;
    
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
    
        case 'storage/canceled':
          // User canceled the upload
          break;
    
    
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
    
  
  },[ url_image ]);

  
  return (
   <div className="_container">
      <Card  className={classes.card}>
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
          image= { ""+url_image+"" }
          title= { props.project.get('title')}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.project.get('content')}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <a  href= { props.project.get('github_url') } target="_blank" >
          <IconButton aria-label="Share" >
            <ShareIcon   />
          </IconButton>
          </a>


         {/* Boite de dialogue */}
          <Dialog title = {props.project.get('title')} url_image = { url_image } 
                 url_video = { url_video }   array_image_id = { props.project.get('images_id')} 
                 _id = { props.project.id } />

        </CardActions>
        
      </Card>

   </div>
  );
}