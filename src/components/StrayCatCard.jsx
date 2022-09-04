import { useContext } from "react"
import { PetContext } from "../context/PetContext"

export default function StrayCatCard() {
  const {cats} = useContext(PetContext)
    return (
        <>
        <div className="cat-card">
        {/* <img src={cat.photoUrl} alt="cat"></img> */}
        <h4>{cats.species}</h4>
        <h4> {cats.address}</h4>
        <p>{cats.description}</p>
        <p>
          Contact: {cats.eMail}, {cats.phone}
        </p><br/>
        <button className="about-pet-btn">Learn more</button>
      </div>
        </>
    )
}