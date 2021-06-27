import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { observer } from 'mobx-react-lite';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import CreateNotepadForm from './components/CreateNotepadForm';
import createNotepadStore from './CreateNotepadStore';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: 32,
  }
}))

const CreateNotepad = observer((props) => {
  const classes = useStyles();

  useEffect(() => {
    const queryString = props.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    if(id) {
      createNotepadStore.getNotepad(id);
    }
    return () => {
      createNotepadStore.reset()
    }
  }, [])

  const handleNavigateBack = () => {
    props.history.goBack();
  }

  const handleCreateNotepad = (data) => {
    if(data.id) {
      createNotepadStore.updateNotepad(data);
      return;
    }
    createNotepadStore.createNotepad(data)
  }

  return (
    <div>
     <Grid container className={classes.header}>
        <Grid>
        <IconButton
            color="primary"
            onClick={handleNavigateBack}
          >
            <ChevronLeft />
          </IconButton>
        </Grid>
      </Grid>
      <Grid>
        <CreateNotepadForm form={createNotepadStore.notepadForm} onSave={handleCreateNotepad}/>
      </Grid>
    </div>
  );
});

export default CreateNotepad;