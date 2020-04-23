import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = props => {
  const { chartData } = props;

  return (
    <>
      <Doughnut
        data={chartData}
        options={{ maintainAspectRatio: false }}></Doughnut>
    </>
  );
};

export default PieChart;
