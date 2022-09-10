import { Link } from "react-router-dom";
import React from "react";
import { Card, Button } from "antd";
import "../../Styles/CatCard.css";
const { Meta } = Card;

export default function CatCard({ cat, setCat }) {
  async function updateCatFavorite(catId, favorite) {
    const fetchPets = await fetch(
      `http://localhost:5001/cat-rescue-backend/us-central1/api/update-cat?_id=${catId}`,
      // `https://cat-rescue-backend.web.app/update-cat?_id=${catId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favorite: !favorite }),
      }
    );
    const cat = await fetchPets.json();
    return !favorite;
  }

  async function handleFavorite(catId) {
    const isFavorite = cat.favorite;
    const newFavorite = await updateCatFavorite(catId, isFavorite);
    console.log(newFavorite);
    setCat({ ...cat, favorite: newFavorite });
  }

  return (
    <div>
      <Card
        className="antd-animal-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img className="card-image" alt="cat" src={cat.photoUrl} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{
          borderStyle: "dashed",
          borderColor: "turquoise",
        }}
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

        {cat.favorite === true ? (
          <div
            onClick={() => {
              handleFavorite(cat._id);
            }}
          >
            ❤️ {cat.favorite}
          </div>
        ) : (
          <div
            onClick={() => {
              handleFavorite(cat._id);
            }}
          >
            ♡
          </div>
        )}
      </Card>
    </div>
  );
}
