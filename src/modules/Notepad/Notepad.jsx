import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NotepadCard from '@components/NotepadCard';
import ButtonLink from '@components/ButtonLink';
import notepadStore from './NotepadStore';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: 32,
  }
}))

const Notepad = observer((props) => {
  const classes = useStyles();
  useEffect(() => {
    notepadStore.getGists()
  }, [])

  const handleEditNotepad = () => {

  }

  const handleDeleteNotepad = (id) => {
    notepadStore.deleteGists(id)
  }

  return (
    <div>
      <Grid container className={classes.header} justify="space-between">
        <Grid>
          <Typography variant="h6" component="h6">
            Notepad
          </Typography>
        </Grid>
        <Grid>
          <ButtonLink to="/create-notepad">Create new Notepad</ButtonLink>
        </Grid>
      </Grid>
      {notepadStore.notepads.map(gis => {
        return (
          <NotepadCard 
            key={gis.id} 
            gis={gis} 
            onEditNotepad={handleEditNotepad} 
            onDeleteNotepad={handleDeleteNotepad}
          />
        )
      })}
    </div>
  );
});

export default Notepad;