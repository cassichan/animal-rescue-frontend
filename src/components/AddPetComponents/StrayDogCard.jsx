import { Card } from "antd";
const { Meta } = Card;

export default function StrayDogCard({ dog }) {
  return (
    <>
      <Card
        className="antd-cat-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="dog" src={dog.image} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
      >
        <Meta
          title={[dog.species, dog.breed, dog.description]}
          description={[dog.address, dog.eMail, dog.phone]}
        />
      </Card>
    </>
  );
}
