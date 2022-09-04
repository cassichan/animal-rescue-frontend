// import { useContext } from "react"
// import { PetContext } from "../../context/PetContext"

import { Card } from "antd";
const { Meta } = Card;

export default function StrayCatCard({ cat }) {
  // const {cat, cats} = useContext(PetContext)
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
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
      >
        <Meta
          title={[cat.species, cat?.breed, cat?.description]}
          description={[cat?.address, cat?.eMail, cat?.phone]}
        />
      </Card>
    </>
  );
}
