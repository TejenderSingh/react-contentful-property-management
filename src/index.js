import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { PropertyProvider } from "./PropertyContext";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.render(
  <PropertyProvider>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </PropertyProvider>,

  document.getElementById("root")
);
