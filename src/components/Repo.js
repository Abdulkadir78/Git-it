import React from "react";
import langColors from "../styles/langColors";
import { GoRepo, GoStar, GoRepoForked } from "react-icons/go";

function Repo({ repo }) {
  const truncateName = (name) => {
    return name.slice(0, 19) + "...";
  };

  return (
    <div className="card col-11 col-md-5 col-lg-4 col-xl-3 mt-4 ml-3">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark font-weight-normal text-decoration-none"
      >
        <div className="card-body">
          <GoRepo className="mr-2" size={17} />
          <span className="card-title h4 text-monospace">
            {repo.name.length > 20 ? truncateName(repo.name) : repo.name}
          </span>
          <p className="mt-3 pb-3 text-break">{repo.description}</p>
        </div>

        <div style={{ position: "absolute", bottom: "10px", left: "25px" }}>
          <div
            className="float-left mt-2 mr-1"
            style={{
              width: "0.6rem",
              height: "0.6rem",
              borderRadius: "0.6rem",
              backgroundColor: langColors[repo.language],
            }}
          ></div>
          <span>{repo.language}</span>
          <GoStar className="ml-3 pb-1" size={20} />
          <span>{repo.stargazers_count}</span>
          <GoRepoForked className="ml-3" size={17} />
          <span>{repo.forks_count}</span>
          <span className="ml-3">{repo.size}KB</span>
        </div>
      </a>
    </div>
  );
}

export default Repo;
