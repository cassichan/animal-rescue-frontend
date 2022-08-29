import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import CatList from "./components/CatList";
// import DogList from "./components/DogList"
import Home from "./pages/Home";
import AddPet from "./components/AddPet";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/found-a-pet">Found an animal? Get help</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/found-a-pet" element={<AddPet />}></Route>
      </Routes>
    </>
  );
}

export default App;
