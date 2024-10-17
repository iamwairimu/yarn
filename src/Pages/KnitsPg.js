import React from "react";

import Navbar from "../Components/Navbar";
import "./Knits.css";
import Display from "../Components/DisplayTwo";

function KnitPg() {
  return (
    <div className="back">
      <Navbar></Navbar>
      <div className="content">
        <Display></Display>
      </div>
    </div>
  );
}

export default KnitPg;
