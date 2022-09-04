// import { useContext } from "react";
// import { PetContext } from "../../context/PetContext";

export default function DetailedCatCard({cat}) {
  // const { cats } = useContext(PetContext);
  return (
    <>
    {/* If cat is null, don't break please */}
      <div className="detailed-cat-card">
        <h1>Individual cat</h1>
        <img src={cat?.photoUrl} alt="cat"></img>
        <h2>{cat?.name}</h2>
        <h3>{cat?.sex}</h3>
        <h4>
          Breed: {cat?.breed}
          <br />
          Size: {cat?.size}
          <br />
          Estimated date of birth:{cat?.dateOfBirth}
        </h4>
        <section>
          {cat?.rescue}
          <br />
          E-mail address: {cat?.eMail}
          <br />
          Location: {cat?.address}
        </section>
        <br />
        <p>{cat?.description}</p>
      </div>
    </>
  );
}
