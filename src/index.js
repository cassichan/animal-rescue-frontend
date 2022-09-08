import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import PetContextProvider from "./context/PetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <PetContextProvider>
        <App />
      </PetContextProvider>
    </Router>
  </React.StrictMode>
);
