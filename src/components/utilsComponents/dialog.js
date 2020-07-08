import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'

import SwipeableTextMobileStepper from '../utilsComponents/caroussel'
import './utils.css'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(false);


  function handleClickOpen() {
    setImage(false)
    setOpen(true)
  }

 function handleClickOnImage(){
    setImage(true)
    setOpen(true)

  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
        <IconButton aria-label="Share" onClick={handleClickOpen} >
            <VideocamIcon fontSize = "large" />
        </IconButton>

        <IconButton aria-label="Share" onClick={handleClickOnImage} >
            <PhotoCameraIcon />
        </IconButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar, 'appBarDialog'}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                { props.title }
            </Typography>
            {/* <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        { image
        
        ? 
            <div style= { { display:'flex', flex:1,flexDirection:'column-reverse'} } >
                <SwipeableTextMobileStepper 
                array_image_id = { props.array_image_id }
                url_image = { props.url_image }
                _id = { props._id }
                
                />
            </div>            
        : 
          <div style= { { display:'flex', flex:1,justifyContent:'center',alignItems:'center' , height:50+'vh' } } >
            <video  controls autoPlay height = { window.innerHeight - 100 } width="1080" >
              <source  style= { { display:'flex', flex:1 } }  src = { props.url_video } ></source>
            </video>
          </div>
        }
      </Dialog>
    </div>
  );
}