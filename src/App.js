import { Suspense } from "react";
import { observer } from 'mobx-react-lite';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import { BrowserRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { routerConfig } from '@config/router';
import { linksConfig } from '@config/navigation';
import NavBar from '@components/NavBar';
import Snackbar from '@components/Snackbar';
import rootStoreUI from './stores/RootStoreUI';
import Switcher from './Switcher';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  workspace: {
    height: 'calc(100% - 64px)',
    position: 'relative'
  },
  progressBar: {
    position: 'absolute',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    height: '100vh ',
    overflow: 'auto',
  },
  container: {
    height: '100% - 4px)',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
      <CssBaseline />
      <NavBar links={linksConfig}/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.workspace} >
            {rootStoreUI.inProgress && <LinearProgress className={classes.progressBar} color="secondary"/>}
            <Container maxWidth="xl" className={classes.container}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switcher routes={routerConfig} auth={true} />
            </Suspense>
            <Snackbar />
            </Container>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default observer(App);
