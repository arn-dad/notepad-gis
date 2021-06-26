import { Suspense } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { BrowserRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { routerConfig } from '@config/router';
import { linksConfig } from '@config/navigation';
import NavBar from '@components/NavBar';
import Switcher from './Switcher';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    height: 'calc(100% - 64px)',
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
      <Suspense fallback={<div>Loading...</div>}>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
          <Switcher routes={routerConfig} auth={true} />
          </Container>
        </main>
      </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
