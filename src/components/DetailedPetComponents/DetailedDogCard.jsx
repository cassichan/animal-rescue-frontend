import { useContext } from "react";
import { Card } from "antd";
import { PetContext } from "../../context/PetContext";
import "../../Styles/DetailedPetPage.css";
import "../../App.css";

export default function DetailedDogCard() {
  const { dog } = useContext(PetContext);
  if (!dog) {
    return <h1> Loading...please wait</h1>;
  }
  return (
    <section className="detailed-antd-animal-card">
      <img className="detailed-animal-image" src={dog.photoUrl} alt="dog"></img>
      <Card title={dog.name}>
        <section>
          <p> {dog.eMail}</p>
          <p>{dog.address}</p>
          <p>{dog.phone}</p>
          <p>Size: {dog.size}</p>
          <p>Sex: {dog.sex}</p>
          <p>Breed: {dog.breed}</p>
          <p>Estimated Date of Birth: {dog.dateOfBirth}</p>
          <p> {dog.rescue}</p>
          <p>Description: {dog.description}</p>
        </section>
      </Card>
    </section>
  );
}
