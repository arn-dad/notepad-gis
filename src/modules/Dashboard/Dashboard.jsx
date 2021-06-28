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
  controls: {
    padding: '10px 0 10px 0',
  }
}))

const Dashboard = () => {
  const classes = useStyles();

  useEffect(() => {
    dashboardStore.getGistsPublicList();
    dashboardStore.getGistsDateFilesRange();
    return () => {
      dashboardStore.reset();
    }
  }, [])

  const handleLoadMoreGist = () => {
    dashboardStore.getGistsPublicList();
  }

  const handleLoadMoreFiles = () => {
    dashboardStore.getGistsDateFilesRange();
  }

  return (
    <Container maxWidth="lg">
      <Grid className={classes.header}>
        <Typography variant="h5" component="h5">
          Dashboard
        </Typography>
      </Grid>
      <Grid container>
        <Grid container lg={6} md={12} spacing={6}>
          <Grid container alignItems="center" item>
            <Grid item xs={12}>
              <Chart data={dashboardStore.chartData} />
            </Grid>
            <Grid container className={classes.controls} item justify="center" xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleLoadMoreGist}
                >
                Load More gists
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container lg={6} md={12} spacing={6}>
          <Grid container alignItems="center" item>
            <Grid item xs={12}>
              <Chart data={dashboardStore.fileChartData} />
            </Grid>
            <Grid container className={classes.controls} item justify="center" xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleLoadMoreFiles}
                >
                Load More files
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default observer(Dashboard);