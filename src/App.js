import { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import NewPetPage from "./pages/NewPetPage";
import IndividualPet from "./pages/IndiviualPet";
import "antd/dist/antd.min.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      {/* <div className="login-sign-up">
          {!token ?
            isUser 
              ? <Login setIsUser={setIsUser} setToken={setToken} />
              : <SignUp setIsUser={setIsUser} setToken={setToken} />
          : null }
        </div> */}

      {/* <Link to = "`/cat/${cat._id}`">Learn more</Link> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/found-a-pet" element={<NewPetPage />}></Route>
        <Route path="/cat/:_id" element={<IndividualPet />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
