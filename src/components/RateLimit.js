import React from "react";

function RateLimit({ limit }) {
  return (
    <div>
      <h5 className="pl-4 pt-3 mb-1">{limit}/60</h5>
      <h6 className="text-muted pl-2">requests left</h6>
    </div>
  );
}

export default RateLimit;
