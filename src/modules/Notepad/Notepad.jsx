import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NotepadCard from '@components/NotepadCard';
import ButtonLink from '@components/ButtonLink';
import notepadStore from './NotepadStore';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: 32,
  },
  notepadWrapper: {
    '& > div': {
      marginBottom: '10px',
   }
  }
}))

const Notepad = observer((props) => {
  const classes = useStyles();
  useEffect(() => {
    notepadStore.getGistsList();
  }, [])

  const handleEditNotepad = (id) => {
    props.history.push({
      pathname: '/create-notepad',
      search: `id=${id}`,
    })
  }

  const handleDeleteNotepad = (id) => {
    notepadStore.deleteById(id)
  }

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.header} justify="space-between">
        <Grid>
          <Typography variant="h5" component="h5">
            Notepad
          </Typography>
        </Grid>
        <Grid>
          <ButtonLink to="/create-notepad">Create new Notepad</ButtonLink>
        </Grid>
      </Grid>
      <Grid className={classes.notepadWrapper}>
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
        {!notepadStore.notepads.length && (
          <Grid container justify="center">
            No Notepad to show.
          </Grid>
        )}
      </Grid>
    </Container>
  );
});

export default Notepad;