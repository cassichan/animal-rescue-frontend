// import { useContext } from "react";
// import { PetContext } from "../../context/PetContext";
import "../../App.css";
import "../../Styles/DetailedPetPage.css";

export default function DetailedDogCard({ dog }) {
  // const {dog} = useContext(PetContext)
  return (
    // If dog is null, don't break please
    <div className="detailed-animal-card">
      <img
        className="detailed-animal-image"
        src={dog?.photoUrl}
        alt="dog"
      ></img>
      <div className="detailed-animal-card-text">
        <h1>{dog?.name}</h1>
        <h2>
          Sex: {dog?.sex}
          <br />
          Breed: {dog?.breed}
        </h2>
        <h3>
          <br />
          Size: {dog?.size}
          <br />
          Estimated date of birth: {dog?.dateOfBirth}
        </h3>
        <h4>{dog?.rescue}</h4>
        <section>
          E-mail address: {dog?.eMail}
          Location:<p>{dog?.address}</p>
        </section>
        <br />
        <p>Details: {dog?.description}</p>
      </div>
    </div>
  );
}
