import { useContext, useEffect, useState } from "react";
import { PetContext } from "../../context/PetContext";
import StrayCatCard from "../AddPetComponents/StrayCatCard.jsx";
import StrayDogCard from "../AddPetComponents/StrayDogCard.jsx";

export default function StrayPetList() {
  // const { cats, setCats, dogs, setDogs, cat, setCat, dog, setDog } = useContext(PetContext);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    // fetch("https://cat-rescue-backend.web.app/get-new-cat")
    fetch(
      "http://localhost:5001/cat-rescue-backend/us-central1/api/get-new-cat"
    )
      .then((results) => results.json())
      .then((data) => {
        setCats(data);
      })
      .catch(console.error);
    fetch(
      "http://localhost:5001/cat-rescue-backend/us-central1/api/get-new-dog"
    )
      .then((results) => results.json())
      .then((data) => {
        setDogs(data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <p>List of stray cats</p>
      <section className="pet-list">
        {cats && cats.map((cat) => <StrayCatCard key={cat._id} cat={cat} />)}
      </section>
      <p>List of stray dogs</p>
      <section className="pet-list">
        {dogs && dogs.map((dog) => <StrayDogCard key={dog._id} dog={dog} />)}
      </section>
    </>
  );
}
