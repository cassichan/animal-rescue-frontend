import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import PetContextProvider from "./context/PetContext";
import App from "./App";
import "./index.css";

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
