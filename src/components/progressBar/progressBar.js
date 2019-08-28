import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import './progressBar.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    fontSize:'30px',
  },
});

export default function LinearDeterminate(props) {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === props.skill) {
          return props.skill;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, props.skill);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={completed} />
      <br />
    </div>
  );
}