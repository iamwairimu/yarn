import React from "react";

import Navbar from "../Components/Navbar";
import "./Crochet.css";
import Display from "../Components/Display";

function CrochetPg() {
  return (
    <div className="back">
      <Navbar></Navbar>
      <div className="content">
        <Display></Display>
      </div>
    </div>
  );
}

export default CrochetPg;
