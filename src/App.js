import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddPet from "./components/AddPet";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/found-a-pet">Found an animal? Get help</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/found-a-pet" element={<AddPet />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
