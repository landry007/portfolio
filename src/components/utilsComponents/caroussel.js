import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import firebase from '../config/fireBaseConfig'
import 'firebase/storage';


const storageRoot = firebase.storage().ref()

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 20,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    width: 'inherit',
    height: 'inherit',
    display: 'flex',
    flex: 1,
    background: 'no-repeat',
    // backgroundSize: theme.props.size,
    overflow: 'hidden',
    marginTop: 46,

  },
}));

function SwipeableTextMobileStepper(props) {
  const classes = useStyles()
  const [tutorialSteps, setTutorialSteps] = React.useState([])
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = tutorialSteps.length

  React.useEffect(() => {

    props.array_image_id.map(id => {

      storageRoot.child(`images/${props._id}/${id}.png`).getDownloadURL().then(url => {

        setTutorialSteps(prevTutos => prevTutos.concat([url]))
      }).catch(function (error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            storageRoot.child(`images/${props._id}/${id}.jpg`).getDownloadURL().then(url => {
              setTutorialSteps(prevTutos => prevTutos.concat([url]))
            })

            break;
        }
      });

    })

  }, [props.array_image_id])

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  function handleStepChange(step) {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        {/* <Typography>{ tutorialSteps[activeStep] }</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step} alt={index} />
            ) : null}
          </>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;