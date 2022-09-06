import { Link } from "react-router-dom";
import React, { useContext } from "react";
// import { PetContext } from "../../context/PetContext"
import { Card } from "antd";
import { Button } from "antd";
import { updateFavorite } from "../../services/services.js";
import "../../Styles/CatCard.css";

const { Meta } = Card;
export default function CatCard({ cat, setCats }) {
  // const { cats, setCats } = useContext(PetContext);

  async function handleFavorite(catId) {
    const newFavorite = await updateFavorite(catId);
    console.log(newFavorite);
    setCats((cats) => {
      return cats.map((cat) =>
        cat._id === catId ? { ...cat, favorite: true } : cat
      );
    });
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
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
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
          <div>♡</div>
        )}
      </Card>
    </div>
  );
}
