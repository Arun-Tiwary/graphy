import React from "react";

// eslint-disable-next-line no-unused-vars
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChart;
