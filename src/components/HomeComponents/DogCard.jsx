import React, { useContext } from "react";
import { PetContext } from "../../context/PetContext.jsx";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { updateDogFavorite } from "../../services/services.js";

const { Meta } = Card;
export default function DogCard({ dog, setDog }) {
  // const { dog } = useContext(PetContext);

  async function handleFavorite(dogId) {
    const isFavorite = dog.favorite;
    const newFavorite = await updateDogFavorite(dogId, isFavorite);
    console.log(newFavorite);
    setDog({ ...dog, favorite: newFavorite });
  }
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
          <Meta title={dog.name} description={[`${dog.size}, ${dog.breed}`]} />
          <Link to={`/dogs/${dog._id}`}>
            <Button type="link" htmlType="button">
              Details
            </Button>
          </Link>

          {dog.favorite === true ? (
            <div
              onClick={() => {
                handleFavorite(dog._id);
              }}
            >
              ❤️ {dog.favorite}
            </div>
          ) : (
            <div
              onClick={() => {
                handleFavorite(dog._id);
              }}
            >
              ♡
            </div>
          )}
        </Card>
      </div>
    </>
  );
}
