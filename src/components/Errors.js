import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import RateLimit from "./RateLimit";

function Errors({ error, limit, timer }) {
  return (
    <>
      <RateLimit limit={limit} />

      <div className="text-center container" style={{ marginTop: "10rem" }}>
        <a
          href="https://github.com/Abdulkadir78"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          <FaGithub size={80} />
        </a>
        <h2 className="font-weight-normal mt-2">Git-it</h2>

        <h5 className="mt-4 font-weight-normal">
          {error}

          {timer && (
            <span>
              Try again <span className="text-info">{timer}</span>
            </span>
          )}
        </h5>

        <Link to="/" className="btn btn-dark mt-3">
          Go back
        </Link>
      </div>
    </>
  );
}

export default Errors;
