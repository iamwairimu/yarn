import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import CrochetPg from "./Pages/CrochetPg";
import KnitPg from "./Pages/KnitsPg";
import FeedbackPg from "./Pages/FeedbackPg";

//Creating a router instance with defined routes
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

//Creating a root element for rendering the site
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
