import { useContext } from "react";
import { PetContext } from "../../context/PetContext";
import "../../App.css";
import "../../Styles/DetailedPetPage.css";
import { Card } from "antd";

export default function DetailedDogCard() {
  const {dog} = useContext(PetContext)
  return (
    // If dog is null, don't break please
    <section className="detailed-antd-animal-card">
      <img
        className="detailed-animal-image"
        src={dog?.photoUrl}
        alt="dog"
      ></img>
      <Card
        title={dog?.name}
        style={{
          width: 300,
        }}
      >
        <p> {dog?.eMail}</p>
        <p>{dog?.address}</p>
        <p>{dog?.phone}</p>
        <p>Size: {dog?.size}</p>
        <p>Sex: {dog?.sex}</p>
        <p>Breed: {dog?.breed}</p>
        <p>Estimated Date of Birth: {dog?.dateOfBirth}</p>
        <p> {dog?.rescue}</p>
      </Card>
    </section>
  );
}
