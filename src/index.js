import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { PropertyProvider } from "./PropertyContext";

ReactDOM.render(
  <PropertyProvider>
    <Router>
      <App />
    </Router>
  </PropertyProvider>,

  document.getElementById("root")
);
