import React, { useContext } from "react";
// import { PetContext } from "../context/PetContext";
import { Card } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import { Button } from "antd";

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
          <Meta title={dog.name} description={[dog.size, dog.breed, dog.dateOfBirth]} />
          <Link to={`/dogs/${dog._id}`}>
            <Button type="link" htmlType="button">
              Learn more
            </Button>
          </Link>
        </Card>
      </div>
    </>
  );
}
