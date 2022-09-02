import { Link, Routes, Route } from "react-router-dom";
import IndividualPet from "../pages/IndiviualPet";
import { Button } from "antd";
import "../Styles/DogCard.css"

export default function DogCard({ dog }) {
    return (
      <>
        <div className="dog-card">
          <img src={dog.photoUrl} alt="dog"></img>
          <h4>{dog.name}</h4>
          <h5>
            {dog.sex}, {dog.breed}
          </h5>
          <h5>
            {dog.size}, {dog.dateOfBirth}
          </h5>
          <h5>{dog.rescue}</h5>
          <p>
            Contact: {dog.eMail}, {dog.address}
          </p><br/>
          <p>{dog.description}</p>
          <Link to = {`/dog/${dog._id}`}>
        <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
        <Routes>
      <Route path="/dog/_id" element={<IndividualPet/>}></Route>
      </Routes>
        </div>
      </>
    );
  }
  