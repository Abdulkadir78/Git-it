import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import FlipMove from "react-flip-move";

import { fetchRepos } from "../api";
import Repo from "./Repo";
import Charts from "./Charts";
import Loader from "./Loader";
// import mockReposData from "../mockData/mockReposData";

function Repos(props) {
  const [temp, setTemp] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const sortByRef = useRef();

  useEffect(() => {
    const fetching = async () => {
      const [repos, sortedByStars] = await fetchRepos(props.match.params.user);
      if (!repos) {
        setLoading(false);
        return;
      }

      setTemp(repos);
      setRepos(sortedByStars);
      setLoading(false);
    };

    fetching();

    // setTemp(mockReposData);
    // setRepos(mockReposData);
    // setLoading(false);
  }, [props.match.params.user]);

  const handleChange = () => {
    const sort = sortByRef.current.value;

    if (sort === "forks") {
      setRepos(temp.sort((a, b) => b.forks_count - a.forks_count).slice(0, 8));
      return;
    } else if (sort === "size") {
      setRepos(temp.sort((a, b) => b.size - a.size).slice(0, 8));
      return;
    }

    setRepos(
      temp.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8)
    );
  };

  if (loading) {
    return <Loader />;
  }

  return temp.length ? (
    <>
      <Charts reposData={temp} />

      <div className="text-center">
        <span className="h2 font-weight-normal">
          Top repositories <small className="text-secondary">by</small>
        </span>

        <span className="ml-2">
          <select
            ref={sortByRef}
            className="px-1 pb-1"
            style={{ borderRadius: "5px", cursor: "pointer" }}
            onChange={handleChange}
          >
            <option defaultValue>stars</option>
            <option>forks</option>
            <option>size</option>
          </select>
        </span>
      </div>
      <hr />

      <div className="row mb-5 mt-3 justify-content-center position-relative">
        <FlipMove typeName={null}>
          {repos.map((repo) => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </FlipMove>
      </div>
    </>
  ) : null;
}

export default withRouter(Repos);
