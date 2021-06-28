import React from 'react';
import { Line } from 'react-chartjs-2';

// @TODO  options must be passed from the parent
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Chart = ({ data }) => (
  <Line data={data} options={options} />
);

export default React.memo(Chart);