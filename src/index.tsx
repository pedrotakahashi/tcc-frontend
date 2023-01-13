import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from "./Pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
