import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NewPetPage from "./pages/NewPetPage";
import IndividualPet from "./pages/IndiviualPet";
import "antd/dist/antd.css"

function App({ cat }) {
  return (
    <>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/found-a-pet">Found an animal? Get help</Link>
      </nav>
      {/* <Link to = "`/cat/${cat._id}`">Learn more</Link> */}

      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/found-a-pet" element={<NewPetPage />}></Route>
        {/* <Route path="/cat/:_id" element={<IndividualPet/>}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
