// import { useContext } from "react"
// import { PetContext } from "../../context/PetContext"

export default function StrayCatCard({cat}) {
  // const {cat, cats} = useContext(PetContext)
    return (
        <>
        <div className="cat-card">
        <img src={cat?.image} alt="cat"></img>
        <h4>{cat?.species}</h4>
        <h4> {cat?.address}</h4>
        <p>{cat?.description}</p>
        <p>
          Contact: {cat?.eMail}, {cat?.phone}
        </p>
      </div>
        </>
    )
}