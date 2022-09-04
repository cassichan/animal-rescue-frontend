// import { useContext } from "react";
// import { PetContext } from "../../context/PetContext";

export default function DetailedDogCard({ dog }) {
  // const {dog} = useContext(PetContext)
  return (
    // If dog is null, don't break please
    <div className="detailed-dog-card">
      <h1>Individual cat</h1>
      <img src={dog?.photoUrl} alt="dog"></img>
      <h2>{dog?.name}</h2>
      <h3>{dog?.sex}</h3>
      <h4>
        Breed: {dog?.breed}
        <br />
        Size: {dog?.size}
        <br />
        Estimated date of birth:{dog?.dateOfBirth}
      </h4>
      <h5>{dog?.rescue}</h5>
      <section>
        E-mail address: {dog?.eMail}
        Location:<p>{dog?.address}</p>
      </section>
      <br />
      <p>{dog?.description}</p>
    </div>
  );
}
