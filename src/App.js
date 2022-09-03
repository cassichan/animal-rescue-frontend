import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { PageHeader, Breadcrumb } from "antd";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NewPetPage from "./pages/NewPetPage";
import IndividualPet from "./pages/IndiviualPet";
import "antd/dist/antd.min.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App({ cat }) {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);
  // const routes = [
  //   {
  //     path: "/",
  //     breadcrumbName: "Home",
  //   },
  //   {
  //     path: "found-a-pet",
  //     breadcrumbName: "Found Pet",
  //   },
  // ];

  return (
    <>
      {/* <div className="login-sign-up">
          {!token ?
            isUser 
              ? <Login setIsUser={setIsUser} setToken={setToken} />
              : <SignUp setIsUser={setIsUser} setToken={setToken} />
          : null }
        </div> */}
      {/* <Breadcrumb>
        <Breadcrumb.Item>
        <Home/>
        <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb>
        <Breadcrumb.Item>
        <Link to="/found-a-pet">Found an animal? Get help</Link>
        <Route path="/found-a-pet" element={<NewPetPage />}></Route>
        </Breadcrumb.Item>
        </Breadcrumb>
        </Breadcrumb> */}
      {/* 
      <PageHeader
        className="site-page-header"
        title="Chance 4 Pets"
        breadcrumb={{
          routes,
        }}
        subTitle="This is a subtitle"
      >
        <PageHeader.Item href=""></PageHeader.Item>
      </PageHeader> */}

      <nav className="header">
        <Link className="route-links" to="/">Home</Link>
        <Link className="route-links" to="/found-a-pet">Share found animal</Link>
      </nav>
      {/* <Link to = "`/cat/${cat._id}`">Learn more</Link> */}

      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/found-a-pet" element={<NewPetPage />}></Route>
        <Route path="/cat/:_id" element={<IndividualPet />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
