import React from "react";
import { FaGithub } from "react-icons/fa";

function Errors({ error, limit }) {
  return (
    <>
      <h4 className="font-weight-normal pl-3 pt-3">{limit}/60</h4>
      <h6 className="text-muted pl-2 font-weight-normal">requests left</h6>

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
        <h5 className="mt-4 font-weight-normal">{error}</h5>
        <a href="/" className="btn btn-dark mt-3">
          Go back
        </a>
      </div>
    </>
  );
}

export default Errors;
