import React from 'react';
import { observer } from 'mobx-react-lite';
import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import rootStoreUI from 'stores/RootStoreUI';

const Snackbar = () => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    rootStoreUI.closeAlert();
  };

  return (
    <MuiSnackbar 
      onExited={() => rootStoreUI.closeAlert()}
      open={rootStoreUI.alert.open}
      autoHideDuration={rootStoreUI.alert.autoHideDuration} 
      onClose={handleClose}
    >
      <MuiAlert 
        onClose={handleClose}
        severity={rootStoreUI.alert.severity}
      >
        {rootStoreUI.alert.message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default observer(Snackbar);