import { Card } from "antd";
const { Meta } = Card;

export default function StrayCatCard({ cat }) {
  return (
    <div className="antd-animal-card">
      <Card
        hoverable
        style={{
          width: 250,
        }}
        cover={<img className="card-image" alt="cat" src={cat.image} />}
      >
        <Meta
          title={[cat.breed, cat.description]}
          description={[
            `Location: ${cat.address}
            Contact: ${cat.eMail} ${cat.phone}`
          ]}
        />
      </Card>
    </div>
  );
}
