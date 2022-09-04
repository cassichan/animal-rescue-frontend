// import { useContext } from "react";
// import { PetContext } from "../../context/PetContext.jsx";

export default function StrayDogCard({ dog }) {
  // const {dogs} = useContext(PetContext)
  return (
    <>
      <div className="dog-card">
        <img src={dog?.image} alt="cat"></img>
        <h4>{dog?.species}</h4>
        <h4> {dog?.address}</h4>
        <p>{dog?.description}</p>
        <p>
          Contact: {dog?.eMail}, {dog?.phone}
        </p>
      </div>
    </>
  );
}
