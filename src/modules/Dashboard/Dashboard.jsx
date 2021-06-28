import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chart from '@components/Chart';
import dashboardStore from './DashboardStore';

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

const Dashboard = () => {
  const classes = useStyles();

  useEffect(() => {
    dashboardStore.getGistsPublicList();
    return () => {
      dashboardStore.reset();
    }
  }, [])

  const handleLoadMoreGist = () => {
    dashboardStore.getGistsPublicList();
  }

  return (
    <Container maxWidth="lg">
      <Grid className={classes.header}>
        <Typography variant="h5" component="h5">
          Dashboard
        </Typography>
      </Grid>
      <Grid container spacing={6}>
        <Grid container alignItems="center" item>
          <Grid item xs={12}>
            <Chart data={dashboardStore.chartData} />
          </Grid>
          <Grid container item justify="center" xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleLoadMoreGist}
              >
              Load More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default observer(Dashboard);