import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DetailedCatCard from "../components/IndividualPetComponents/DetailedCatCard";
import DetailedDogCard from "../components/IndividualPetComponents/DetailedDogCard";
import { PetContext } from "../context/PetContext";

export default function IndividualPet({ species }) {
  const [cat, setCat] = useState({});
  const [dog, setDog] = useState({});
  // const { cats, setCats, dogs, setDogs } = useContext(PetContext);
  const { _id } = useParams();
  // console.log({ _id, species });
  // console.log(cat)
  useEffect(() => {
    //   // fetch(`https://cat-rescue-backend.web.app/cats/${_id}`)
    fetch(
      `http://localhost:5001/cat-rescue-backend/us-central1/api/${species}/${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (species === "cats") setCat(data);
        else if (species === "dogs") setDog(data);
      });
  }, [_id]);
  // console.log(cat);
  // if (!cat || !dog) {
  //   return <h1> Loading...please wait</h1>;
  // }
  return (
    // Will set up conditional to render detailedcatcard or detaileddogcard
    <>
      {species === "cats" ? (
        <DetailedCatCard cat={cat} />
      ) : species === "dogs" ? (
        <DetailedDogCard dog={dog} />
      ) : (
        <p>This pet is not available.</p>
      )}
    </>
  );
}
