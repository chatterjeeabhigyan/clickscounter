import React from "react";
import { useEffect } from "react/cjs/react.development";

export default function Loader() {
  useEffect(() => {
    document.title = "Loading... - Clicks Counter"
  })
  return (
    <React.Fragment>
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </React.Fragment>
  );
}
