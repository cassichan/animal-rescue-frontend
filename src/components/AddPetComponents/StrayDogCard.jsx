import { useContext } from "react"
import { PetContext } from "../context/PetContext"

export default function StrayDogCard() {
  const {dogs} = useContext(PetContext)
    return (
        <>
        <div className="dog-card">
        {/* <img src={dog.photoUrl} alt="dog"></img> */}
        <h4>{dogs.species}</h4>
        <h4> {dogs.address}</h4>
        <p>{dogs.description}</p>
        <p>
          Contact: {dogs.eMail}, {dogs.phone}
        </p><br/>
        <button className="about-pet-btn">Learn more</button>
      </div>
        </>
    )
}