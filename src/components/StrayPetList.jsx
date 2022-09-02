import { useEffect, useState } from "react";
import StrayCatCard from "./StrayCatCard";
import StrayDogCard from "./StrayDogCard";

export default function StrayPetList() {
  const [cat, setCat] = useState([]);
  const [dog, setDog] = useState([]);
  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/get-new-cat")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/get-new-cat")
      .then((results) => results.json())
      .then((data) => {
        setCat(data);
      })
      .catch(console.error);
  }, [setCat]);

  useEffect(() => {
    fetch("https://cat-rescue-backend.web.app/get-new-dog")
      // fetch("http://localhost:5001/cat-rescue-backend/us-central1/api/get-new-cat")
      .then((results) => results.json())
      .then((data) => {
        setDog(data);
      })
      .catch(console.error);
  }, [setDog]);
  return (
    <>
      <p>List of stray cats</p>
      <section className="pet-list">
        {cat.map((cat) => (
          <StrayCatCard key={cat._id} id={cat._id} cat={cat} setCat={setCat} />
        ))}
      </section>
      <p>List of stray dogs</p>
      <section className="pet-list">
        {dog.map((dog) => (
          <StrayDogCard key={dog._id} id={dog._id} dog={dog} setDog={setDog} />
        ))}
      </section>
    </>
  );
}