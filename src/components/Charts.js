import React from "react";
import PieChart from "./Charts/PieChart";
import BarCharts from "./Charts/BarCharts";
import DoughnutChart from "./Charts/DoughnutChart";

function Charts({ reposData }) {
  return (
    <>
      <h2 className="font-weight-normal text-center">Statistics</h2>
      <hr />
      <div className="row mb-5 justify-content-center">
        <PieChart reposData={reposData} />
        <BarCharts reposData={reposData} />
        <DoughnutChart reposData={reposData} />
      </div>
    </>
  );
}

export default Charts;
