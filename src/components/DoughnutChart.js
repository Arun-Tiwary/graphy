import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }) => {
  return <Doughnut data={chartData} />;
};

export default DoughnutChart;
