import React from "react";
import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Common/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { UserContext } from "./context/UserContext";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import NewPetPage from "./pages/NewPetPage";
import DetailedPetPage from "./pages/DetailedPetPage";
import Login from "../src/components/Common/Login.jsx";
import SignUp from "../src/components/Common/SignUp.jsx";
import Footer from "./components/Common/Footer";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const {
    token,
    setToken,
    user,
    setUser,
    setIsUser,
    email,
    setEmail,
    setIsLoggedIn,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [setToken]);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
  }, [setEmail]);

  const handleLogout = () => {
    localStorage.clear();
    setToken("");
    setEmail("");
    setUser("");
    navigate("/");
  };

  return (
    <div className="main-app">
      <SignUp
        visible={signUpVisible}
        setVisible={setSignUpVisible}
        setIsUser={setIsUser}
        setUser={setUser}
        setToken={setToken}
      />
      <Login
        visible={loginVisible}
        setVisible={setLoginVisible}
        setIsUser={setIsUser}
        setUser={setUser}
        setToken={setToken}
        setIsLoggedIn={setIsLoggedIn}
        setEmail={setEmail}
      />

      <Navbar />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item onClick={() => setSignUpVisible(!signUpVisible)} key="1">
          Sign up
        </Menu.Item>
        <Menu.Item onClick={() => setLoginVisible(!loginVisible)} key="2">
          Login
        </Menu.Item>
        <Menu.Item key="3" onClick={() => handleLogout()}>
          Logout
        </Menu.Item>
      </Menu>

      <Routes>
        {token ? (
          <Route
            path="/"
            element={
              <Home
                email={email}
                token={token}
                user={user}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          ></Route>
        ) : (
          <Route
            path="*"
            element={
              <Landing isLoading={isLoading} setIsLoading={setIsLoading} />
            }
          ></Route>
        )}
        a
        <Route
          path="/found-a-pet"
          element={
            <NewPetPage isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        ></Route>
        <Route
          path="/cats/:_id"
          element={
            <DetailedPetPage
              species="cats"
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        ></Route>
        <Route
          path="/dogs/:_id"
          element={
            <DetailedPetPage
              species="dogs"
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
