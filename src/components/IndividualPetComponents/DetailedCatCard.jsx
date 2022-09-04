import { useContext } from "react";
import { PetContext } from "../../context/PetContext";

export default function DetailedCatCard() {
  const {cats} = useContext(PetContext)
  return (
    <div className="detailed-cat-card">
      <h1>Individual cat</h1>
      <img src={cats.photoUrl} alt="cat"></img>
      <h2>{cats.name}</h2>
      <h3>{cats.sex}</h3>
      <h4>
        Breed: {cats.breed}
        <br />
        Size: {cats.size}
        <br />
        Estimated date of birth:{cats.dateOfBirth}
      </h4>
      <h5>{cats.rescue}</h5>
      <section>
        E-mail address: {cats.eMail}
        Location:<p>{cats.address}</p>
      </section>
      <br />
      <p>{cats.description}</p>
    </div>
  );
}
