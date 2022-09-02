import { Link, Routes, Route } from "react-router-dom";
import { Card } from "antd";
import React from "react";
import IndividualPet from "../pages/IndiviualPet";
import { Button } from "antd";
import "../Styles/DogCard.css";
const { Meta } = Card;

export default function DogCard({ dog }) {
  return (
    <>
      <div>
        <Card className="dog-card"
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="dog" src={dog.photoUrl} />}
        >
          <Meta title={dog.name} description={dog.description} />
          <Link to={`/dog/${dog._id}`}>
          <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
        <Routes>
          <Route path="/dog/_id" element={<IndividualPet />}></Route>
        </Routes>
        </Card>
        {/* <img src={dog.photoUrl} alt="dog"></img>
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
          <p>{dog.description}</p> */}
      </div>
    </>
  );
}
