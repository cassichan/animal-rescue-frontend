import { useContext, useEffect, useState } from "react";
import { PetContext } from "../../context/PetContext";
import StrayCatCard from "./StrayCatCard";
import StrayDogCard from "../StrayDogCard";

export default function StrayPetList() {
  const { cats, setCats, dogs, setDogs } = useContext(PetContext);
  // const [cat, setCat] = useState([]);
  // const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/get-new-cat")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/get-new-cat")
      .then((results) => results.json())
      .then((data) => {
        setCats(data);
      })
      .catch(console.error);
  }, [setCats]);

  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/get-new-dog")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/get-new-cat")
      .then((results) => results.json())
      .then((data) => {
        setDogs(data);
      })
      .catch(console.error);
  }, [setDogs]);
  return (
    <>
      <p>List of stray cats</p>
      <section className="pet-list">
        {cats.map((cat) => (
          <StrayCatCard key={cat._id} cats={cats} setCats={setCats} />
        ))}
      </section>
      <p>List of stray dogs</p>
      <section className="pet-list">
        {dogs.map((dog) => (
          <StrayDogCard key={dog._id} dogs={dogs} setDogs={setDogs} />
        ))}
      </section>
    </>
  );
}
