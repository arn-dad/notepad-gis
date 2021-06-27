import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgPlaceholder: {
    width: '50%',
    height: 'auto',
  }
}))

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <img className={classes.imgPlaceholder} src={`${process.env.PUBLIC_URL}/images/404.png`} alt="Page not Found" />
    </div>
  );
}

export default NotFound;