import React from "react";
import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Common/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Menu, Layout } from "antd";
import Home from "./pages/Home";
import NewPetPage from "./pages/NewPetPage";
import DetailedPetPage from "./pages/DetailedPetPage";
import Login from "../src/components/Common/Login.jsx";
import SignUp from "../src/components/Common/SignUp.jsx";
import Footer from "./components/Common/Footer";
import "antd/dist/antd.min.css";
import "./App.css";
import { PetContext } from "./context/PetContext";

function App() {
  const { setToken, setIsUser, setEmail, setIsLoggedIn } =
    useContext(PetContext);

  const navigate = useNavigate();

  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [setToken]);

  const handleLogout = () => {
    localStorage.clear();
    setToken("");
    navigate("/")
  };

  return (
    <div className="main-app">
      <SignUp
        visible={signUpVisible}
        setVisible={setSignUpVisible}
        setIsUser={setIsUser}
        setToken={setToken}
      />
      <Login
        visible={loginVisible}
        setVisible={setLoginVisible}
        setIsUser={setIsUser}
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
          <Route path="/" element={<Home />}></Route>
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
