import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import StrayPetList from "./components/StrayPetList";
import NewPetPage from "./pages/NewPetPage";

function App() {
  return (
    <>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/found-a-pet">Found an animal? Get help</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/found-a-pet" element={<NewPetPage />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
