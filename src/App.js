import React from "react";
import PetContextProvider from "./context/PetContext";
import { useState } from "react";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPetPage from "./pages/NewPetPage";
import IndividualPet from "./pages/IndiviualPet";
import Login from "../src/components/common/Login.jsx";
import SignUp from "../src/components/common/SignUp.jsx";
import Footer from "./components/common/Footer";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      <PetContextProvider>
        {/* <div className="login-sign-up">
          {!token ?
            isUser 
              ? <Login setIsUser={setIsUser} setToken={setToken} />
              : <SignUp setIsUser={setIsUser} setToken={setToken} />
          : null }
        </div> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/found-a-pet" element={<NewPetPage />}></Route>
          <Route
            path="/cats/:_id"
            element={<IndividualPet species="cats" />}
          ></Route>
          <Route
            path="/dogs/:_id"
            element={<IndividualPet species="dogs" />}
          ></Route>
        </Routes>
        <Footer />
      </PetContextProvider>
    </>
  );
}

export default App;
