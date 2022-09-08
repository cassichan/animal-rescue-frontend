import React from "react";
import PetContextProvider from "./context/PetContext";
import { useState } from "react";
import Navbar from "./components/Common/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Menu, Layout } from "antd";
import Home from "./pages/Home";
import NewPetPage from "./pages/NewPetPage";
import IndividualPet from "./pages/IndiviualPet";
import Login from "../src/components/Common/Login.jsx";
import Logout from "../src/components/Common/SignUp.jsx";
import SignUp from "../src/components/Common/SignUp.jsx";
import Footer from "./components/Common/Footer";
import "antd/dist/antd.min.css";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
  };
  return (
    <div className="main-app">
      <PetContextProvider>
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
          // isUser={isUser}
          setToken={setToken}
          setIsLoggedIn={setisLoggedIn}
          setEmail={setEmail}
        />
        <Logout
          visible={logoutVisible}
          setVisible={setLogoutVisible}
          //  setIsUser={setIsUser}
          //  setToken={setToken}
        />

        {token ? <h1>Hello, you are logged in {isUser}</h1> : <h1>Guest</h1>}

        <Layout>
          <Navbar />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item onClick={() => setSignUpVisible(!signUpVisible)} key="1">
              Sign up
            </Menu.Item>
            <Menu.Item onClick={() => setLoginVisible(!loginVisible)} key="2">
              Login
            </Menu.Item>
            {/* <Menu.Item onClick={() => setLogoutVisible(!logoutVisible)} key="3">
              Logout
            </Menu.Item> */}
            <Menu.Item key="3" onClick={localStorage.clear()}>
              Logout
            </Menu.Item>
          </Menu>

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
        </Layout>
      </PetContextProvider>
    </div>
  );
}

export default App;
