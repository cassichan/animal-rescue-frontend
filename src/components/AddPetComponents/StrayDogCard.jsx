// import { useContext } from "react";
// import { PetContext } from "../../context/PetContext.jsx";
import { Card } from "antd";
const { Meta } = Card;

export default function StrayDogCard({ dog }) {
  // const {dogs} = useContext(PetContext)
  return (
    <>
      <Card
        className="antd-cat-card"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="dog" src={dog?.image} />}
        headStyle={{ textAlign: "center" }}
        bodyStyle={{ borderStyle: "dashed", borderColor: "turquoise" }}
      >
        <Meta
          title={[dog?.species, dog?.breed, dog?.description]}
          description={[dog?.address, dog?.eMail, dog?.phone]}
        />
      </Card>

      {/* <div className="dog-card">
        <img src={dog?.image} alt="cat"></img>
        <h4>{dog?.species}</h4>
        <h4> {dog?.address}</h4>
        <p>{dog?.description}</p>
        <p>
          Contact: {dog?.eMail}, {dog?.phone}
        </p>
      </div> */}
    </>
  );
}
