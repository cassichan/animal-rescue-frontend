import { Card, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;

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
        {/* <Meta
          style={{ paddingBottom: "20px" }}
          title={[cat.breed, cat.description]}
          description={[
            `Location: ${cat.address},
            Contact: ${cat.eMail}, ${cat.phone}`,
          ]}
        /> */}
        <div className="stray-cat-title-container">
          <Title level={5}>{`Description: ${cat.description}`}</Title>
          <Title level={5}>{`Email: ${cat.eMail}`}</Title>
          <Title level={5}>{`Location: ${cat.address}`}</Title>
          <Title level={5}>{`Phone: ${cat.phone}`}</Title>
        </div>
      </Card>
    </div>
  );
}
