import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { observer } from 'mobx-react-lite';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import createNotepadStore from './CreateNotepadStore';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: 32,
  }
}))

const CreateNotepad = observer((props) => {
  const classes = useStyles();

  const handleNavigateBack = () => {
    props.history.goBack();
  }

  const handleCreateNotepad = () => {
    createNotepadStore.createNotepad({})
  }

  return (
    <div>
     <Grid container className={classes.header} justify="space-between">
        <Grid>
        <IconButton
            color="primary"
            onClick={handleNavigateBack}
          >
            <ChevronLeft />
          </IconButton>
        </Grid>
        <Grid>
          <Button variant="outlined" color="primary" onClick={handleCreateNotepad}>Create</Button>
        </Grid>
      </Grid>
    </div>
  );
});

export default CreateNotepad;