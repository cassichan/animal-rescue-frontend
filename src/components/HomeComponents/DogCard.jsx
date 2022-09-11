import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../../Styles/PetCard.css";

const { Meta } = Card;
export default function DogCard({ dog, setDog }) {
  async function updateDogFavorite(dogId, favorite) {
    const fetchPets = await fetch(
      // `http://localhost:5001/cat-rescue-backend/us-central1/api/update-dog?_id=${dogId}`,
      `https://cat-rescue-backend.web.app/update-dog?_id=${dogId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favorite: !favorite }),
      }
    );
    const pet = await fetchPets.json();
    return !favorite;
  }

  async function handleFavorite(dogId) {
    const isFavorite = dog.favorite;
    const newFavorite = await updateDogFavorite(dogId, isFavorite);
    console.log(newFavorite);
    setDog({ ...dog, favorite: newFavorite });
  }
  return (
    <>
      <div className="antd-animal-card">
        <Card
          headStyle={{ textAlign: "center" }}
          hoverable
          style={{
            width: 240,
          }}
          cover={<img className="card-image" alt="dog" src={dog.photoUrl} />}
        >
          <Meta title={dog.name} description={[`${dog.size}, ${dog.breed}`]} />
          <Link to={`/dogs/${dog._id}`}>
            <Button type="link" htmlType="button">
              Details
            </Button>
          </Link>
          <section className="favorite-container">
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
          </section>
        </Card>
      </div>
    </>
  );
}
