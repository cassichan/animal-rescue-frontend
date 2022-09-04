import React, { useContext } from "react";
// import { PetContext } from "../context/PetContext";
import { Card } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import { Button } from "antd";
import IndividualPet from "../../pages/IndiviualPet";
// import "../Styles/DogCard.css";

const { Meta } = Card;
export default function DogCard({dog}) {
  // const { dogs, setDogs } = useContext(PetContext);
  console.log(dog)
  return (
    <>
      <div>
        <Card
          className="antd-dog-card"
          headStyle={{ textAlign: "center" }}
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="dog" src={dog.photoUrl} />}
          bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
        >
          <Meta title={dog.name} description={dog.description} />
          <Link to={`/dogs/${dog._id}`}>
            <Button type="link" htmlType="button">
              Learn more
            </Button>
          </Link>
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
