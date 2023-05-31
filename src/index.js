import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import PetContextProvider from "./context/PetContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <PetContextProvider>
          <App />
        </PetContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>
);
