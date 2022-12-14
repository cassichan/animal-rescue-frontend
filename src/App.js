import React from "react";
import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Common/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import NewPetPage from "./pages/NewPetPage";
import DetailedPetPage from "./pages/DetailedPetPage";
import Login from "../src/components/Common/Login.jsx";
import SignUp from "../src/components/Common/SignUp.jsx";
import Footer from "./components/Common/Footer";
import { PetContext } from "./context/PetContext";
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
  } = useContext(PetContext);

  const navigate = useNavigate();

  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

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

      <Layout>
        <Navbar />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
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
              element={<Home email={email} token={token} user={user} />}
            ></Route>
          ) : (
            <Route path="*" element={<Landing />}></Route>
          )}

          <Route path="/found-a-pet" element={<NewPetPage />}></Route>
          <Route
            path="/cats/:_id"
            element={<DetailedPetPage species="cats" />}
          ></Route>
          <Route
            path="/dogs/:_id"
            element={<DetailedPetPage species="dogs" />}
          ></Route>
        </Routes>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
