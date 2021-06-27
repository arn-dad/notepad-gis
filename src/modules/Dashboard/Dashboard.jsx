import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chart from '@components/Chart';
import dashboardStore from './DashboardStore';


const Dashboard = () => {
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
    <Grid container >
        <Grid>
          <Typography variant="h6" component="h6">
            Dashboard
          </Typography>
        </Grid>
      <Grid container spacing={6}>
        <Grid item lg={6} md={12}>
          <Chart  data={dashboardStore.chartData} />
          <Button onClick={handleLoadMoreGist}>Load More</Button>
        </Grid>
        {/* <Grid item lg={6} md={12}>
          <Chart data={dashboardStore.chartData}/>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default observer(Dashboard);