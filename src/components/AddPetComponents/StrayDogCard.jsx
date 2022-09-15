import { Card, Typography } from "antd";
import "../../Styles/PetCard.css";
const { Title } = Typography;

export default function StrayDogCard({ dog }) {
  return (
    <div className="antd-animal-card">
      <Card
        hoverable
        style={{
          width: 250,
        }}
        cover={<img className="card-image" alt="dog" src={dog.image} />}
      >
        <div className="stray-animal-title-container">
          <Title level={5}>{`Description: ${dog.description}`}</Title>
          <Title level={5}>{`Location: ${dog.address}`}</Title>
          <Title level={5}>{`Email: ${dog.eMail}`}</Title>
          <Title level={5}>{`Phone: ${dog.phone}`}</Title>
        </div>
      </Card>
    </div>
  );
}
