import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { FieldArray, Form, Formik, getIn } from 'formik';
import { generateId } from '@utilities/uuid/generateId'
import { makeStyles } from '@material-ui/core/styles';
import { notepadSchema } from '../../schema/notepad.schema';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paperWrapper: {
    padding: 16
  },
  sectionDivider: {
    padding: '15px 0 15px 0'
  },
  button: {
    margin: theme.spacing(1),
  }
}))

const CreateNotepadForm = (props) => {
  const [notepad, setNotepad] = useState(props.form);
  const classes = useStyles()

  useEffect(() => {
    setNotepad(ps => ({ ...props.form }))
  }, [props.form])

  return (
    <Container maxWidth="lg">
      <Paper className={classes.paperWrapper}>
        <Formik
          enableReinitialize
          initialValues={notepad}
          validationSchema={notepadSchema}
          onSubmit={(values) => props.onSave(values)}
        >
        {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
          <Form noValidate autoComplete="off">
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" component="h6">Notepad</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="title"
                  label="Title"
                  variant="outlined"
                  value={values.title}
                  onChange={handleChange}
                  error={Boolean(errors.title)}
                  helperText={errors.title}
                />
              </Grid>
            </Grid>
            <Grid item className={classes.sectionDivider} xs={12}>
              <Typography variant="h6" component="h6">Notes</Typography>
            </Grid>
            <FieldArray name="notes">
              {({ push, remove }) => (
                <>
                  {values.notes.map((n, index) => {
                    const title = `notes[${index}].title`;
                    const touchedTitle = getIn(touched, title);
                    const errorTitle = getIn(errors, title);
                    const note = `notes[${index}].note`;
                    const touchedNote = getIn(touched, note);
                    const errorNote = getIn(errors, note);

                    return (
                      <Grid container item alignItems="center" spacing={4} xs={12} key={n.id}>
                        <Grid item xs={10}>
                          <TextField
                            fullWidth
                            name={title}
                            label="Title"
                            variant="outlined"
                            value={n.title}
                            helperText={touchedTitle && errorTitle ? errorTitle : ""}
                            error={Boolean(touchedTitle && errorTitle)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid container justify="center" item xs={2}>
                          <IconButton color="secondary" disabled={values.notes.length === 1} onClick={() => remove(index)}>
                            <RemoveIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            name={note}
                            label="Note"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={n.note}
                            helperText={touchedNote && errorNote ? errorNote : ""}
                            error={Boolean(touchedNote && errorNote)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                      </Grid>
                    );
                  })}
                    <Button
                      className={classes.button}
                      variant="contained" 
                      color="primary" 
                      type="submit" 
                      endIcon={<Icon>send</Icon>}
                    >
                      Create
                    </Button>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        push({ id: generateId(),  title: '', note: '' })
                      }}
                    >
                    <AddIcon />
                  </IconButton>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
      </Paper>
    </Container>
  )
};

export default CreateNotepadForm;