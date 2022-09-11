import { useContext } from "react";
import { PetContext } from "../../context/PetContext";
import "../../App.css";
import "../../Styles/DetailedPetPage.css";
import { Card } from "antd";

export default function DetailedCatCard() {
  const { cat } = useContext(PetContext);
  if (!cat) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    /* Initial state of cat is an empty object. If cat is null, don't break please */
    <section className="detailed-antd-animal-card">
      <img
        className="detailed-animal-image"
        src={cat?.photoUrl}
        alt="cat"
      ></img>
      <Card
        title={cat?.name}
        style={{
          width: 800,
        }}
      >
        <section>
          <p> {cat?.rescue}</p>
          <p> {cat?.eMail}</p>
          <p>{cat?.address}</p>
          <p>{cat?.phone}</p>
          <p>Size: {cat?.size}</p>
          <p>Sex: {cat?.sex}</p>
          <p>Breed: {cat?.breed}</p>
          <p>Estimated Date of Birth: {cat?.dateOfBirth}</p>
          <p>Description: {cat?.description}</p>
        </section>
      </Card>
    </section>
  );
}
