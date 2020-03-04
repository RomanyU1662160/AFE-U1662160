import React from "react";
import {Bar} from "react-chartjs-2";

const BarChart = props => {
  const {chartData} = props;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: "label"
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false
          },
          labels: ["Total Scored", "Scored Away ", "Scored Home"]
        }
      ],
      yAxes: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-3",
          gridLines: {
            display: true
          },
          labels: {
            show: true
          }
        }
      ]
    }
  };

  const plugins = [
    {
      afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("Goals Chart", 500, 10);
      }
    }
  ];

  return (
    <>
      <Bar data={chartData} options={options} />
    </>
  );
};

export default BarChart;
