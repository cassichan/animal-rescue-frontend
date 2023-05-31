import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Card, Button } from "antd";
import { PetContext } from "../../context/PetContext";
import "../../Styles/PetCard.css";
const { Meta } = Card;

export default function CatCard({ cat, setCat }) {
  const { token } = useContext(PetContext);
  async function updateCatFavorite(catId, favorite) {
    const fetchPet = await fetch(
      // `http://localhost:5001/cat-rescue-backend/us-central1/api/update-cat?_id=${catId}`,
      // `https://cat-rescue-backend.web.app/update-cat?_id=${catId}`,
      `${process.env.REACT_APP_API}/update-cat?_id=${catId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({ favorite: !favorite }),
      }
    );
    const cat = await fetchPet.json();
    return !favorite;
  }

  async function handleFavorite(catId) {
    const isFavorite = cat.favorite;
    const newFavorite = await updateCatFavorite(catId, isFavorite);
    setCat({ ...cat, favorite: newFavorite });
  }

  return (
    <div className="antd-animal-card home-page">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img className="card-image" alt="cat" src={cat.photoUrl} />}
      >
        <div className="card-text">
          <Meta
            title={cat.name}
            description={[`${cat.size}, ${cat.breed}`]}
            loading="false"
          />
        </div>
        <Link to={`/cats/${cat._id}`}>
          <Button type="link" htmlType="button">
            Details
          </Button>
        </Link>

        {token ? (
          <section className="favorite-container">
            <section className="favorite">
              {cat.favorite === true ? (
                <div
                  onClick={() => {
                    handleFavorite(cat._id);
                    // updateUserFavorite();
                  }}
                >
                  ❤️ {cat.favorite}
                </div>
              ) : (
                <div
                  onClick={() => {
                    handleFavorite(cat._id);
                    // updateUserFavorite();
                  }}
                >
                  ♡
                </div>
              )}
            </section>
          </section>
        ) : (
          <h1>Login to favorite me!</h1>
        )}
      </Card>
    </div>
  );
}
