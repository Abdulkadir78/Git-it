import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Countup from "react-countup";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

import Error from "./Errors";
import RateLimit from "./RateLimit";
import { fetchUserData } from "../api";
import { fetchRateLimit } from "../api";
import Loader from "./Loader";
// import mockUserData from "../mockData/mockUserData";

function User(props) {
  const [userData, setUserData] = useState({});
  const [limit, setLimit] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      const data = await fetchUserData(props.match.params.user);

      if (data.status === 404) {
        setError(data.error);
        setLimit(await fetchRateLimit());
        setLoading(false);
        return;
      }
      if (data.status === 403) {
        setError(data.error);
        setLimit(await fetchRateLimit());
        setLoading(false);
        return;
      }

      setUserData(data);
      setLimit(await fetchRateLimit());
      setLoading(false);
    };

    fetching();

    // setUserData(mockUserData);
  }, [props.match.params.user]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} limit={limit} />;
  }

  return userData.login ? (
    <>
      <RateLimit limit={limit} />

      <div className="text-center mb-5 mt-4 container">
        <img
          src={userData.avatar_url}
          alt="avatar"
          className="rounded-circle mb-2"
          style={{ width: "10rem", border: "5px #5bc0de solid" }}
        />
        <h1 className="font-weight-normal">{userData.name}</h1>
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="h3 font-weight-normal text-decoration-none text-info"
        >
          @{userData.login}
        </a>

        <div className="mt-4 font-weight-normal">
          {userData.company ? (
            <span>
              <FaBriefcase className="mr-1 mb-1" />
              <span>{userData.company}</span>
            </span>
          ) : null}

          {userData.location ? (
            <span className="mx-5 d-block d-md-inline">
              <FaMapMarkerAlt className="mr-1 mb-1" />
              <span className="">{userData.location}</span>
            </span>
          ) : null}

          <FaCalendarAlt className="mr-1 mb-1" />
          <span>Joined: {new Date(userData.created_at).toDateString()}</span>
        </div>

        <div className="row mt-4 justify-content-center">
          <div className="card col-11 col-md-3 ml-3 mt-3">
            <div className="card-body">
              <h4>
                <Countup
                  start={0}
                  end={userData.public_repos || 0}
                  duration={3}
                  separator=","
                />
              </h4>
              <span>Repositories</span>
            </div>
          </div>

          <div className="card col-11 col-md-3 ml-3 mt-3">
            <div className="card-body">
              <h4>
                <Countup
                  start={0}
                  end={userData.followers || 0}
                  duration={3}
                  separator=","
                />
              </h4>
              <span>Followers</span>
            </div>
          </div>

          <div className="card col-11 col-md-3 ml-3 mt-3">
            <div className="card-body">
              <h4>
                <Countup
                  start={0}
                  end={userData.following || 0}
                  duration={5}
                  separator=","
                />
              </h4>
              <span>Following</span>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
}

export default withRouter(User);
