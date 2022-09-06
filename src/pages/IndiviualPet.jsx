import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import DetailedCatCard from "../components/DetailedPetComponents/DetailedCatCard";
import DetailedDogCard from "../components/DetailedPetComponents/DetailedDogCard";
import "../Styles/DetailedPetPage.css";
import { PetContext } from "../context/PetContext";

export default function IndividualPet({ species }) {
  // const [cat, setCat] = useState({});
  // const [dog, setDog] = useState({});
  const { cat, setCat, dog, setDog } = useContext(PetContext);
  const { _id } = useParams();
  useEffect(() => {
    fetch(`https://cat-rescue-backend.web.app/${species}/${_id}`)
      // fetch(
      //   `http://localhost:5001/cat-rescue-backend/us-central1/api/${species}/${_id}`
      // )
      .then((res) => res.json())
      .then((data) => {
        if (species === "cats") setCat(data);
        else if (species === "dogs") setDog(data);
      })
      .catch((error) => console.error(error));
  }, [species, _id]);

  if (!cat || !dog) {
    return <h1> Loading...please wait</h1>;
  }
  return (
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
