import { useEffect } from "react";
import CatCard from "./CatCard";
import DogCard from "./DogCard";

export default function StrayPetList({
  species,
  setSpecies,
  cat,
  setCat,
  dog,
  setDog,
}) {
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/get-new-cat")
    // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/get-new-cat")
      .then((results) => results.json())
      .then((data) => {
        setCat(data);
      })
      .catch(console.error);
  }, [setCat, setSpecies]);
  return (
    <>
    <p>List of stray cats</p>
      <section className="pet-list">
      <div className="cat-card" key={cat._id}>
        <h4>{cat.species}</h4>
        <h5>{cat.rescue}</h5>
        <p>
          Contact: {cat.eMail}, {cat.address}
        </p><br/>
        <p>{cat.description}</p>
        </div>
      </section>
    </>
  );
}

// {
//   useEffect(() => {
//     fetch(`https://cat-rescue-backend.web.app/get-new-${species}`)
//       .then((results) => results.json())
//       .then((data) => {
//         if (species === "cat") {
//           setCat(data);
//         } else {
//           setDog(data);
//         }
//       })
//       .catch(console.error);
//   }, [setCat, setDog, setSpecies ]);

//   if (species === "cat") {
//     return (
//       <>
//         <section className="pet-list">
//           {cat && cat.map((cat) => <CatCard cat={cat} setCat={setCat} />)}
//         </section>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <section className="pet-list">
//           {dog &&
//             dog.map((cat) => (
//               <DogCard dog={dog} setDog={setDog} />
//             ))}
//         </section>
//       </>
//     );
//   }
// }
