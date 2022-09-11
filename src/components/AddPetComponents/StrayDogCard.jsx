import { Card } from "antd";
import "../../Styles/PetCard.css";
const { Meta } = Card;

export default function StrayDogCard({ dog }) {
  return (
    <div className="antd-animal-card">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img className="card-image" alt="dog" src={dog.image} />}
      >
        <div className="card-text">
          <Meta
            title={[dog.breed, dog.description]}
            description={[
              `Location: ${dog.address}, Contact: ${dog.eMail}, ${dog.phone}`,
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
