import React from "react";
// import PetContextProvider from "./context/PetContext";
import { useState, useContext } from "react";
import Navbar from "./components/Common/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Menu, Layout } from "antd";
import Home from "./pages/Home";
import NewPetPage from "./pages/NewPetPage";
import DetailedPetPage from "./pages/DetailedPetPage";
import Login from "../src/components/Common/Login.jsx";
import Logout from "../src/components/Common/SignUp.jsx";
import SignUp from "../src/components/Common/SignUp.jsx";
import Footer from "./components/Common/Footer";
import "antd/dist/antd.min.css";
import "./App.css";
import { PetContext } from "./context/PetContext";

function App() {
  const { token, setToken, isUser, setIsUser, setEmail, setIsLoggedIn } =
    useContext(PetContext);

  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setToken("");
  };

  // useEffect(()=>{
  //   if(localStorage.getItem('token')) {
  //     setToken(localStorage.getItem('token'))
  //   }
  // },[setToken]);

  return (
    <div className="main-app">
      {/* <PetContextProvider> */}
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
      {/* <Logout
        visible={logoutVisible}
        setVisible={setLogoutVisible}
      /> */}

      {token ? <h1>Hello, you are logged in</h1> : <h1>Guest</h1>}

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
      {/* </PetContextProvider> */}
    </div>
  );
}

export default App;
