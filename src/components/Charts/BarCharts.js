import React from "react";
import { Bar } from "react-chartjs-2";
import HorizontalBarChart from "./HorizontalBarChart";

function BarChart({ reposData }) {
  const repoDetails = reposData.map((repo) => {
    return {
      name: repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    };
  });

  const starSort = repoDetails.sort((a, b) => b.stars - a.stars).slice(0, 5);
  const noStats = starSort.every((obj) => obj.stars === 0);

  const barChart = (
    <Bar
      data={{
        labels: starSort.map(({ name }) => name),
        datasets: [
          {
            data: starSort.map(({ stars }) => stars),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(60, 60, 64, 0.6)",
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
          yAxes: [
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
    <>
      <div className="card col-11 col-md-5 my-3 ml-4">
        <h4 className="card-title text-center font-weight-normal">
          Most starred repositories
        </h4>
        <h5 className="text-muted font-weight-normal text-center py-5">
          Nothing to see here
        </h5>
      </div>
      <HorizontalBarChart repoDetails={repoDetails} />
    </>
  ) : (
    <>
      <div className="card col-11 col-md-5 my-3 ml-4">
        <h4 className="card-title text-center font-weight-normal">
          Most starred repositories
        </h4>
        {barChart}
      </div>
      <HorizontalBarChart repoDetails={repoDetails} />
    </>
  );
}

export default BarChart;
