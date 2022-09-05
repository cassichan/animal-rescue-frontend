import { Link, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import IndividualPet from "../../pages/IndiviualPet.jsx";
// import { PetContext } from "../../context/PetContext"
import { Card } from "antd";
import { Button } from "antd";
import "../../Styles/CatCard.css";
// import "../../App.css"

const { Meta } = Card;
export default function CatCard({ cat }) {
  // const { cats, setCats } = useContext(PetContext);
  console.log(cat);
  return (
    <div>
      <Card
        className="antd-animal-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img className = "card-image" alt="cat" src={cat.photoUrl} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise"}}
      >
        <Meta
          title={cat.name}
          description={[`${cat.size}, ${cat.breed}`]}
          loading="false"
        />
        <Link to={`/cats/${cat._id}`}>
          <Button type="link" htmlType="button">
            Details
          </Button>
        </Link>
      </Card>
    </div>
  );
}
