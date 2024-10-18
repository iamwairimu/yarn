import React from "react";

import Navbar from "../Components/Navbar";
import "./Feedback.css";
import Feedlayout from "../Components/feed";

function FeedbackPg() {
  return (
    <div className="back">
      <Navbar></Navbar>
      <Feedlayout></Feedlayout>
    </div>
  );
}

export default FeedbackPg;
