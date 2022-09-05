import { Link, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import IndividualPet from "../../pages/IndiviualPet.jsx";
// import { PetContext } from "../../context/PetContext"
import { Card } from "antd";
import { Button } from "antd";
import "../../Styles/CatCard.css";
const { Meta } = Card;
export default function CatCard({ cat }) {
  // const { cats, setCats } = useContext(PetContext);
  console.log(cat);
  return (
    <div>
      <Card
        className="antd-cat-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="cat" src={cat.photoUrl} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
      >
        <Meta
          title={`${cat.name}`}
          description={[`Size: ${cat.size}, Breed: ${cat.breed} Estimated birthday: ${cat.dateOfBirth}`]}
          loading="false"
        />
        <Link to={`/cats/${cat._id}`}>
          <Button type="link" htmlType="button">
            Learn more
          </Button>
        </Link>
      </Card>
    </div>
  );
}