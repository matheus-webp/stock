import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/reset.css";
import { Navigation } from "./navigation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);
