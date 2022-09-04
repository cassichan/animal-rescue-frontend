import { useContext } from "react";
import { PetContext } from "../../context/PetContext";

export default function DetailedCatCard() {
  const {dogs} = useContext(PetContext)
  return (
    <div className="detailed-dog-card">
      <h1>Individual cat</h1>
      <img src={dogs.photoUrl} alt="dog"></img>
      <h2>{dogs.name}</h2>
      <h3>{dogs.sex}</h3>
      <h4>
        Breed: {dogs.breed}
        <br />
        Size: {dogs.size}
        <br />
        Estimated date of birth:{dogs.dateOfBirth}
      </h4>
      <h5>{dogs.rescue}</h5>
      <section>
        E-mail address: {dogs.eMail}
        Location:<p>{dogs.address}</p>
      </section>
      <br />
      <p>{dogs.description}</p>
    </div>
  );
}
