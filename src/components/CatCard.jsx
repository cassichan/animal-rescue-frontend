import { Link, Routes, Route } from "react-router-dom";
import IndividualPet from "../pages/IndiviualPet";
import { Button } from "antd";
import "../Styles/CatCard.css";

export default function CatCard({ cat }) {
  return (
    <>
      <div className="cat-card">
        <img src={cat.photoUrl} alt="cat"></img>
        <h2>{cat.name}</h2>
        <h3>{cat.sex}</h3>
        <h4>
          Breed: {cat.breed}
          <br />
          Size: {cat.size}
          <br />
          Estimated date of birth:{cat.dateOfBirth}
        </h4>

        <h5>{cat.rescue}</h5>
        <section>
          E-mail address: {cat.eMail}
          Location:<p>{cat.address}</p>
        </section>
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

        <Link to={`/cat/${cat._id}`}>
          <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
        <Routes>
          <Route path="/cat/_id" element={<IndividualPet />}></Route>
        </Routes>
      </div>
    </>
  );
}
