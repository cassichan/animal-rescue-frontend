import { Card } from "antd";
const { Meta } = Card;

export default function StrayDogCard({ dog }) {
  return (
    <>
      <Card
        className="antd-animal-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="dog" src={dog.image} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{
          textAlign: "left",
        }}
      >
        <Meta
          title={[dog.breed, dog.description]}
          description={[
            `Location: ${dog.address}, Contact: ${dog.eMail} ${dog.phone}`,
          ]}
        />
      </Card>
    </>
  );
}
