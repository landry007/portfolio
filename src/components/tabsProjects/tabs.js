import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import ProjectGroup from '../projectGroup/projectGroup'
import './tabs.css'

 let data = ['HTML5 / CSS3','REACTJS / REACT NATIVE','ANGULAR/ VUEJS/ IONIC','DART/ FLUTTER','NODES JS & EXPRESS JS','PHP','PYTHON','UIs','AUTRES']

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginTop:16,
  }
 
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    
    <div className={classes.root}>

      <AppBar position="static"  className="app_root">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
         
        >
           { data.map( ( title, k ) => <Tab key= { k } label = { title } />)}
         
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        { data.map( (title, k) =><TabContainer key = { k } dir={theme.direction} >
         
           <ProjectGroup title = { title } navigation = { props.navigation } />
         
         </TabContainer>)}


      </SwipeableViews>
    </div>
  );
}