import { Card } from "antd";
const { Meta } = Card;

export default function StrayCatCard({ cat }) {
  return (
    <>
      <Card
        className="antd-cat-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="cat" src={cat?.image} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{ 
          // borderStyle: "dashed", borderColor: "turquoise",
         textAlign: "left" }}
      >
        <Meta
          title={[cat.breed, cat.description]}
          description={[
            `Location: ${cat.address}, Contact: ${cat.eMail}, ${cat.phone}`,
          ]}
        />
      </Card>
    </>
  );
}
