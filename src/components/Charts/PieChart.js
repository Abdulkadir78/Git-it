import React from "react";
import { Pie } from "react-chartjs-2";

import langColors from "../../styles/langColors";

function PieChart({ reposData }) {
  let languages = { others: 0 };
  reposData.forEach((repo) => {
    if (repo.language) {
      if (languages.hasOwnProperty(repo.language)) {
        languages[repo.language] += 1;
        return;
      }
      languages[repo.language] = 1;
      return;
    }
    languages.others += 1;
  });

  if (languages.others === 0) {
    delete languages.others;
  }

  const language = Object.keys(languages);
  const count = Object.values(languages);

  const pieChart =
    (language.length > 12 && window.screen.width < 1200) ||
    language.length > 52 ? null : (
      <Pie
        data={{
          labels: language,
          datasets: [
            {
              data: count,
              backgroundColor: language.map(
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

  return pieChart ? (
    <div className="card col-11 col-md-5 my-3 ml-4 p-2">
      <h4 className="card-title text-center font-weight-normal mt-2">
        Top languages
      </h4>
      {pieChart}
    </div>
  ) : null;
}

export default PieChart;
