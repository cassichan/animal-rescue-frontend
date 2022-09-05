import React from "react";
import PetContextProvider from "./context/PetContext";
import { useState } from "react";
import Navbar from "./components/Common/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import { Button } from "antd";
import Home from "./pages/Home";
import NewPetPage from "./pages/NewPetPage";
import IndividualPet from "./pages/IndiviualPet";
import Login from "../src/components/Common/Login.jsx";
import SignUp from "../src/components/Common/SignUp.jsx";
import Footer from "./components/Common/Footer";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);
  return (
    <>
      <PetContextProvider>
        {/* <div className="login-sign-up">
          <Link to="/users/login">
            <Button type="link" htmlType="button">
              Login
            </Button>
          </Link>
          <Link to="/users">
            <Button type="link" htmlType="button">
              Sign up
            </Button>
          </Link>
        </div> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route
            path="/users"
            element={
              !token ? (
                isUser ? (
                  <Login setIsUser={setIsUser} setToken={setToken} />
                ) : (
                  <SignUp setIsUser={setIsUser} setToken={setToken} />
                )
              ) : null
            }
          ></Route>
          <Route
            path="/users/login"
            element={
              !token ? (
                isUser ? (
                  <Login setIsUser={setIsUser} setToken={setToken} />
                ) : (
                  <SignUp setIsUser={setIsUser} setToken={setToken} />
                )
              ) : null
            }
          ></Route> */}
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
