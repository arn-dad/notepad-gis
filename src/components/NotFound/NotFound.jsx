import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  imgPlaceholder: {
    width: '100%',
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