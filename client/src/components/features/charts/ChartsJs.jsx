import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "./data/revenueData.json";
import sourceData from "./data/sourceData.json";
import "./chart.css";
import LineChart from "./typesOfGraphs/LineChart";
import BarChart from "./typesOfGraphs/BarChart";
import DoughnutChart from "./typesOfGraphs/DoughnutChart";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function ChartsJs() {
  return (
    <div className="BarChart ChartsJsBox d-flex">
      <div className="dataCard customerCard">
        <BarChart />
      </div>
      <div className="dataCard categoryCard d-flex justify-content-center align-items-center">
        <DoughnutChart />
      </div>
      <div className="dataCard revenueCard">
        <LineChart />
      </div>
    </div>
  );
}

export default ChartsJs;
