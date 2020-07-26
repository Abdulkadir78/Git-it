import React from "react";
import { FaGithub } from "react-icons/fa";

function Search(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector(".name");
    props.history.push(`/${name.value}`);
  };

  return (
    <>
      <div className="text-center" style={{ marginTop: "12rem" }}>
        <a
          href="https://github.com/Abdulkadir78"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark"
        >
          <FaGithub size={80} />
        </a>
        <h2 className="font-weight-normal mt-2">Git-it</h2>
        <span>A new look for your github profile</span>
      </div>
      <form
        className="col-md-4 mx-auto form-group mt-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form-control p-4 name text-center text-monospace"
          required
          style={{ border: "1px black solid", fontSize: "x-large" }}
        />
        <div className="text-center">
          <input type="submit" value="Search" className="btn btn-dark mt-4" />
        </div>
      </form>
    </>
  );
}

export default Search;
