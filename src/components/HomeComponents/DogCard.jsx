import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import { UserContext } from "../../context/UserContext";
import "../../Styles/PetCard.css";

const { Meta } = Card;
export default function DogCard({ dog, setDog }) {
  const { token } = useContext(UserContext);
  async function updateDogFavorite(dogId, favorite) {
    const fetchPets = await fetch(
      `${process.env.REACT_APP_API}/update-dog?_id=${dogId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
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
      <div className="antd-animal-card home-page">
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
          {token ? (
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
          ) : (
            <h1>Login to favorite me!</h1>
          )}
        </Card>
      </div>
    </>
  );
}
