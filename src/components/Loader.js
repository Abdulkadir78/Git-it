import React from "react";

function Loader() {
  return (
    <div style={{ height: "30rem" }}>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="spinner-border text-info"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
