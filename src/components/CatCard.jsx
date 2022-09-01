import { Link, Routes, Route } from "react-router-dom";
import IndividualPet from "../pages/IndiviualPet";
import { Button } from "antd";
import "../Styles/CatCard.css";

export default function CatCard({ cat }) {
  return (
    <>
      <div className="cat-card" key={cat._id}>
        <img src={cat.photoUrl} alt="cat"></img>
        <h4>{cat.name}</h4>
        <h5>
          {cat.sex}, {cat.breed}
        </h5>
        <h5>
          {cat.size}, {cat.dateOfBirth}
        </h5>
        <h5>{cat.rescue}</h5>
        <p>
          Contact: {cat.eMail}, {cat.address}
        </p>
        <br />
        <p>{cat.description}</p>
        {/* <Link to="/catbyid">
          <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
        <Routes>
          <Route path="/catbyid" element={<IndividualPet />}></Route>
        </Routes> */}


        <Link to = {`/cat/${cat._id}`}>
        <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
        <Routes>
      <Route path="/cat/_id" element={<IndividualPet/>}></Route>
      </Routes>
      </div>
    </>
  );
}
