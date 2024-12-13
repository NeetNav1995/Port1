import React from "react";
import { BG, PERFORM } from "../../Helper/Images";

export default function AboutBase() {
  return (
    <>
    <div className="d-flex g-3">
      <img
        src={BG}
        alt="Portfolio Banner"
        style={{ height: "30rem",width:"45rem",borderRadius:"20px"}}
      />
      <div style={{paddingLeft:""}}>
       <h5>My Vision - Small Steps leads to Big Results</h5>
      </div>
    </div>
    <div className="d-flex justify-content-end">
    <img
      src={PERFORM}
      alt="Portfolio Banner"
      style={{ height: "30rem",width:"45rem",borderRadius:"20px"}}
    />
  </div>
  </>
  );
}
