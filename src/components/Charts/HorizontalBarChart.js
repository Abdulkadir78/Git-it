import React from "react";
import { HorizontalBar } from "react-chartjs-2";

function HorizontalBarChart({ repoDetails }) {
  const forkSort = repoDetails.sort((a, b) => b.forks - a.forks).slice(0, 5);
  const noStats = forkSort.every((obj) => obj.forks === 0);

  const horizontalBarChart = (
    <HorizontalBar
      data={{
        labels: forkSort.map(({ name }) => name),
        datasets: [
          {
            data: forkSort.map(({ forks }) => forks),
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
              "rgba(255, 159, 64, 0.7)",
              "rgba(60, 60, 64, 0.7)",
            ],
            borderWidth: 0.5,
            borderColor: "black",
            hoverBorderWidth: 1,
          },
        ],
      }}
      options={{
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );

  return noStats ? (
    <div className="card col-11 col-md-5 my-3 ml-4">
      <h4 className="card-title text-center font-weight-normal mt-2">
        Most forked repositories
      </h4>
      <h6 className="text-muted font-weight-normal text-center py-5">
        Nothing to see here
      </h6>
    </div>
  ) : (
    <div className="card col-11 col-md-5 my-3 ml-4 p-2">
      <h4 className="card-title text-center font-weight-normal mt-2">
        Most forked repositories
      </h4>
      {horizontalBarChart}
    </div>
  );
}

export default HorizontalBarChart;
