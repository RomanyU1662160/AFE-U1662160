import React, {useEffect} from "react";
import {Line} from "react-chartjs-2";

const LineChart = props => {
  const {chartData} = props;

  return (
    <>
      <Line data={chartData} options={{maintainAspectRatio: false}}></Line>
    </>
  );
};

export default LineChart;
