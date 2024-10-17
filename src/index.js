import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import CrochetPg from "./Pages/CrochetPg";
import KnitPg from "./Pages/KnitsPg";
import FeedbackPg from "./Pages/FeedbackPg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "crochet",
    element: <CrochetPg />,
  },
  {
    path: "knits",
    element: <KnitPg />,
  },
  {
    path: "Feedback",
    element: <FeedbackPg />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
