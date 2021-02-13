import React from "react";
import { Doughnut } from "react-chartjs-2";

import langColors from "../../styles/langColors";

function DoughnutChart({ reposData }) {
  let languages = { others: 0 };
  reposData.forEach((repo) => {
    if (repo.language) {
      if (languages.hasOwnProperty(repo.language)) {
        languages[repo.language] += repo.stargazers_count;
        return;
      }
      languages[repo.language] = repo.stargazers_count;
      return;
    }
    languages.others += repo.stargazers_count;
  });

  if (languages.others === 0) {
    delete languages.others;
  }

  for (const language in languages) {
    if (!languages[language]) {
      delete languages[language];
    }
  }

  const langs = Object.keys(languages);
  const stars = Object.values(languages);
  const noStars = stars.every((star) => star === 0);

  const doughnutChart =
    (langs.length > 12 && window.screen.width < 1200) ||
    langs.length > 52 ? null : (
      <Doughnut
        data={{
          labels: langs,
          datasets: [
            {
              data: stars,
              backgroundColor: langs.map(
                (language) => langColors[language] + "B3"
              ),
              borderWidth: 0.5,
              borderColor: "black",
              hoverBorderWidth: 1,
            },
          ],
        }}
        options={{
          legend: {
            position: "right",
          },
        }}
      />
    );

  return noStars ? (
    <div className="card col-11 col-md-5 my-3 ml-4">
      <h4 className="card-title text-center font-weight-normal mt-2">
        Stars per language
      </h4>
      <h6 className="text-muted font-weight-normal text-center py-5">
        Nothing to see here
      </h6>
    </div>
  ) : doughnutChart ? (
    <div className="card col-11 col-md-5 my-3 ml-4 p-2">
      <h4 className="card-title text-center font-weight-normal mt-2">
        Stars per language
      </h4>
      {doughnutChart}
    </div>
  ) : null;
}

export default DoughnutChart;
